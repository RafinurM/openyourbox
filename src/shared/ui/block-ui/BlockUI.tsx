import clsx from "clsx";
import style from "./BlockUI.module.scss"
import type { TItem } from "@/types";
import { URL } from "@/api/openyourbox-api";

type ButtonUIProps = {
    item: TItem;
    action: (id: string) => void;
    isOpen: boolean;
}

export const BlockUI = ({ item, action, isOpen}: ButtonUIProps) => {
  return (
    <div className={clsx(style.block, !isOpen && style.block_active)} onClick={action}>
      <div className={style.content}>
        {isOpen ? <img className={clsx(style.icon)} src={URL + `${item.icon}`} alt={`${item.name}`}/> : null}
      </div>
    </div>
  );
};
