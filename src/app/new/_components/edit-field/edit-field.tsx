import type { ReactNode } from 'react';

import style from './edit-field.module.css';

export type EditFieldProps = {
  id: string;
  label: string;
  description?: string;
  children: ReactNode;
};

export const EditField = ({ id, label, description, children }: EditFieldProps) => {
  return (
    <div>
      <label className={style.label} htmlFor={id} data-testid="edit-field">
        {label}
        {description && <span className={style.description}>{description}</span>}
      </label>
      {children}
    </div>
  );
};
