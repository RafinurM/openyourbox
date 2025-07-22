import { useEffect, type ReactNode } from "react";
import style from "./BoardUI.module.scss";
import clsx from "clsx";


type TBoardUIProps = {
  children: ReactNode;
}
export const BoardUI = ({children}: TBoardUIProps) => {
  useEffect(() => {

  }, [])
  return <section className={clsx(style.banner, style.board)}>{children}</section>;
};
