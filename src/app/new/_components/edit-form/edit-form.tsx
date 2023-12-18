'use client';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button/button';
import { InputText } from '@/components/input-text/input-text';

import { useEditFormHandler } from '../../_handlers/use-edit-form-handler';
import { usePageStore } from '../../_store/use-page-store';
import { EditField } from '../edit-field/edit-field';

import style from './edit-form.module.css';

export const EditForm = () => {
  const { t } = useTranslation('page');

  const store = usePageStore();
  const { name, password } = store;

  const { handleChangeName, handleChangePassword, handleSaveTriplink } =
    useEditFormHandler(store);

  return (
    <form className={style.form} onSubmit={handleSaveTriplink}>
      <div className={style['form-field']}>
        <EditField id="name" label={t('page.new.edit-form.name')}>
          <InputText
            id="name"
            defaultValue={name}
            placeholder={t('page.new.edit-form.name.placeholder')}
            onChange={handleChangeName}
          />
        </EditField>
        <EditField id="password" label={t('page.new.edit-form.password')}>
          <InputText
            id="password"
            defaultValue={password}
            placeholder={t('page.new.edit-form.password.placeholder')}
            onChange={handleChangePassword}
          />
        </EditField>
      </div>
      <Button variant="contained" size="md">
        {t('page.new.button')}
      </Button>
    </form>
  );
};