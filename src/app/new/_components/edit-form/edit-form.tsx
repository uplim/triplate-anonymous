'use client';

import { useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

import { ValidationError } from '@/actions/errors';
import { executeServerActions } from '@/actions/execute-server-actions';
import { Button } from '@/components/button/button';
import { FormError } from '@/components/form-error/form-error';
import { InputText } from '@/components/input-text/input-text';

import { EditField } from '../edit-field/edit-field';

import { createTriplink } from './_actions/actions';

import style from './edit-form.module.css';

export const EditForm = () => {
  const { t } = useTranslation('new');

  const [isPending, startTransition] = useTransition();

  const [errors, setErrors] = useState<ValidationError['errors']>();

  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          try {
            await executeServerActions(() => createTriplink(formData));
          } catch (error) {
            if (error instanceof ValidationError) {
              setErrors(error.errors);
            }
          }
        })
      }
      className={style.form}
    >
      <div className={style['form-field']}>
        <EditField id="name" label={t('new.edit-form.name')}>
          <InputText
            id="name"
            name="name"
            defaultValue=""
            placeholder={t('new.edit-form.name.placeholder')}
          />
          <FormError id="name" message={errors?.name?.join(' ')} />
        </EditField>
        <EditField id="password" label={t('new.edit-form.password')}>
          <InputText
            id="password"
            name="password"
            defaultValue=""
            placeholder={t('new.edit-form.password.placeholder')}
          />
          <FormError id="password" message={errors?.password?.join(' ')} />
        </EditField>
      </div>
      <Button variant="contained" size="md" aria-disabled={isPending}>
        {t('new.button')}
      </Button>
    </form>
  );
};
