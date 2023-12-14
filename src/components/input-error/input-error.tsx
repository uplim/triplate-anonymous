import { HiOutlineExclamationCircle } from 'react-icons/hi';

import style from './input-error.module.css';

export type InputErrorProps = {
  id: string;
  message?: string;
};

export const InputError = ({ id, message }: InputErrorProps) => {
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
