'use client';

import { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import { InputText } from '@/components/input-text/input-text';

import { EditField } from '../edit-field/edit-field';

import style from './edit-form.module.css';

export const EditForm = () => {
  const { t } = useTranslation('page');

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = () => {
    return '';
  };

  return (
    <form className={style.form}>
      <EditField id="name" label={t('page.new.edit-form.name')}>
        <InputText
          id="name"
          defaultValue=""
          placeholder={t('page.new.edit-form.name.placeholder')}
          onChange={handleChangeInput}
        />
      </EditField>
      <EditField id="password" label={t('page.new.edit-form.password')}>
        <InputText
          id="password"
          defaultValue=""
          placeholder={t('page.new.edit-form.password.placeholder')}
          onChange={handleChangeInput}
        />
      </EditField>
    </form>
  );
};
