import { ChangeEventHandler, AriaAttributes } from 'react';

import style from './input-text.module.css';

export type InputTextProps = {
  id?: string;
  placeholder?: string;
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & Pick<
  AriaAttributes,
  'aria-labelledby' | 'aria-invalid' | 'aria-describedby' | 'aria-disabled'
>;

export const InputText = ({
  id,
  defaultValue,
  placeholder,
  onChange,
  ...ariaAttributes
}: InputTextProps) => {
  return (
    <input
      id={id}
      className={style.input}
      placeholder={placeholder}
      value={defaultValue}
      type="text"
      onChange={(e) => {
        if (ariaAttributes['aria-disabled']) return;
        onChange(e);
      }}
      {...ariaAttributes}
    />
  );
};
