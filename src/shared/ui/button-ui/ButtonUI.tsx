import style from "./ButtonUI.module.scss";
import clsx from "clsx";

type TButtonUIProps = {
  name: string;
  action?: () => void;
  className?: string;
};

export const ButtonUI = ({ name, action, className }: TButtonUIProps) => {
  return (
    <button
      onClick={action}
      className={clsx(style.button, className)}
    >
      <p className={style.buttonText}>{name}</p>
    </button>
  );
};
