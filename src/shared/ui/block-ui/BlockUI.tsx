import clsx from "clsx";
import style from "./BlockUI.module.scss"
import type React from "react";

type ButtonUIProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    action: () => void;
    isOpen: boolean;
}

export const BlockUI = ({ Icon, action, isOpen}: ButtonUIProps) => {
  return (
    <div className={clsx(style.block, !isOpen && style.block_active)} onClick={action}>
      <div className={style.content}>
        {isOpen ? <Icon className={clsx(style.icon)}/> : ''}
      </div>
    </div>
  );
};
