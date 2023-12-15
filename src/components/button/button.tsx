import {
  AriaAttributes,
  ButtonHTMLAttributes,
  ComponentPropsWithRef,
  MouseEventHandler,
  forwardRef,
} from 'react';

import style from './button.module.css';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'contained';
  size?: 'md';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: string;
} & Pick<AriaAttributes, 'aria-disabled'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, children, className, onClick, formAction, ...rest },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${className} ${style.base} ${
          variant ? style['variant-' + variant] : ''
        } ${size ? style['size-' + size] : ''}`}
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
