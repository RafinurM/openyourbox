import type { ReactNode } from "react";
import style from "./UserUI.module.scss";

type TUserUIProps = {
    children: ReactNode;
}
export const UserUI = ({children} : TUserUIProps) => {
    return (
        <div className={style.container}>
        {children}
        </div>
        
    )
}