import type { AriaAttributes } from 'react';

import style from './input-text.module.css';

export type InputTextProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue: string;
} & Pick<AriaAttributes, 'aria-labelledby' | 'aria-invalid' | 'aria-describedby' | 'aria-disabled'>;

export const InputText = ({
  id,
  name,
  defaultValue,
  placeholder,
  ...ariaAttributes
}: InputTextProps) => {
  return (
    <input
      id={id}
      name={name}
      className={style.input}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type="text"
      {...ariaAttributes}
    />
  );
};
