import { HiOutlineExclamationCircle } from 'react-icons/hi';

import style from './form-error.module.css';

export type FormErrorProps = {
  id: string;
  message?: string;
};

export const FormError = ({ id, message }: FormErrorProps) => {
  return (
    <div
      className={`${style.outer} ${message ? style.show : style.disable}`}
      id={id}
      role="alert"
    >
      <HiOutlineExclamationCircle className={style.icon} size={20} />
      <p className={style.message}>{message}</p>
    </div>
  );
};
