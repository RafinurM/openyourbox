import type { ReactNode } from "react";
import style from "./MainUI.module.scss";

type TMainUIProps = {
  children: ReactNode;
};
export const MainUI = ({ children }: TMainUIProps) => {
  return <main className={style.main}>{children}</main>;
};
