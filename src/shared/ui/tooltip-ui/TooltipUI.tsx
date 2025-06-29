import { useState, type ReactElement } from "react";
import style from "./TooltipUI.module.scss";
import clsx from "clsx";

export const TooltipUI = ({
  children,
  text,
  customClass
}: {
  children: ReactElement;
  text: string;
  customClass?: string;
}) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
    <>
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={style.container}
      >
        {children}
        {showToolTip && <div className={clsx(style.tooltip, customClass ? customClass : '')}>{text}</div>}
      </div>
    </>
  );
};
