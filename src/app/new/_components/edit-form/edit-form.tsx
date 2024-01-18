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

  const handleSave = async (formData: FormData) => {
    try {
      const { data: id } = await executeServerActions(() => createTriplink(formData));

      window.location.href = `/triplinks/${id}`;
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrors(error.errors);
      }
    }
  };

  return (
    <form
      action={(formData) => startTransition(async () => handleSave(formData))}
      className={style.form}
    >
      <div className={style['form-field']}>
        <EditField id="name" label={t('new.edit-form.name')}>
          <InputText
            id="name"
            name="name"
            defaultValue=""
            aria-invalid={!!errors?.name}
            placeholder={t('new.edit-form.name.placeholder')}
          />
          <FormError id="name" messages={errors?.name} />
        </EditField>
        <EditField id="password" label={t('new.edit-form.password')}>
          <InputText
            id="password"
            name="password"
            defaultValue=""
            aria-invalid={!!errors?.password}
            placeholder={t('new.edit-form.password.placeholder')}
          />
          <FormError id="password" messages={errors?.password} />
        </EditField>
      </div>
      <Button type="submit" variant="contained" size="md" aria-disabled={isPending}>
        {t('new.button')}
      </Button>
    </form>
  );
};
