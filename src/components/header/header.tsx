import style from './header.module.css';

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.container}>{title && <h1 className={style.title}>{title}</h1>}</div>
    </header>
  );
};
