'use client';

import { redirect } from 'next/navigation';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

import { executeServerActions } from '@/actions/execute-server-actions';
import { Button } from '@/components/button/button';
import { InputText } from '@/components/input-text/input-text';

import { EditField } from '../edit-field/edit-field';

import { createTriplink } from './_actions/actions';

import style from './edit-form.module.css';

export const EditForm = () => {
  const { t } = useTranslation('page');

  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          try {
            await executeServerActions(() => createTriplink(formData));
          } catch (error) {
            console.error(error);
          }
        })
      }
      className={style.form}
    >
      <div className={style['form-field']}>
        <EditField id="name" label={t('page.new.edit-form.name')}>
          <InputText
            id="name"
            name="name"
            defaultValue=""
            placeholder={t('page.new.edit-form.name.placeholder')}
          />
        </EditField>
        <EditField id="password" label={t('page.new.edit-form.password')}>
          <InputText
            id="password"
            name="password"
            defaultValue=""
            placeholder={t('page.new.edit-form.password.placeholder')}
          />
        </EditField>
      </div>
      <Button variant="contained" size="md" aria-disabled={isPending}>
        {t('page.new.button')}
      </Button>
    </form>
  );
};
