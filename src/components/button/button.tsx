import { AriaAttributes, ComponentPropsWithRef, MouseEventHandler, forwardRef } from 'react';

import style from './button.module.css';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  type?: 'button' | 'submit';
  variant?: 'contained';
  size?: 'md';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: string;
} & Pick<AriaAttributes, 'aria-disabled'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', variant, size, children, className, onClick, ...rest }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={`${className} ${style.base} ${variant ? style[`variant-${variant}`] : ''} ${
          size ? style[`size-${size}`] : ''
        }`}
        onClick={(e) => {
          if (rest['aria-disabled'] || !onClick) return;
          onClick(e);
        }}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
