import { HiOutlineExclamationCircle } from 'react-icons/hi';

import style from './form-error.module.css';

export type FormErrorProps = {
  id: string;
  messages?: string[];
};

export const FormError = ({ id, messages }: FormErrorProps) => {
  return (
    <div
      className={`${style.outer} ${messages ? style.show : style.disable}`}
      id={id}
      role="alert"
    >
      <HiOutlineExclamationCircle className={style.icon} size={20} />
      <p className={style.message}>{messages?.join('\n')}</p>
    </div>
  );
};
