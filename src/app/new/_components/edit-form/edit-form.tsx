'use client';

import { useTranslation } from 'react-i18next';

import { InputText } from '@/components/input-text/input-text';

import { useEditFormHandler } from '../../_hooks/handlers/use-edit-form-handler';
import { usePageStore } from '../../_hooks/store/use-page-store';
import { EditField } from '../edit-field/edit-field';

import style from './edit-form.module.css';

export const EditForm = () => {
  const { t } = useTranslation('page');

  const store = usePageStore();

  const { handleChangeName, handleChangePassword, handleSaveTriplink } =
    useEditFormHandler(store);

  return (
    <form className={style.form}>
      <EditField id="name" label={t('page.new.edit-form.name')}>
        <InputText
          id="name"
          defaultValue=""
          placeholder={t('page.new.edit-form.name.placeholder')}
          onChange={handleChangeName}
        />
      </EditField>
      <EditField id="password" label={t('page.new.edit-form.password')}>
        <InputText
          id="password"
          defaultValue=""
          placeholder={t('page.new.edit-form.password.placeholder')}
          onChange={handleChangePassword}
        />
      </EditField>
    </form>
  );
};
