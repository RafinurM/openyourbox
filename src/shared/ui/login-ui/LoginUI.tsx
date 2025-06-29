import { Button } from "@/shared/components/Button";
import style from "./LoginUI.module.scss";

export const LoginUI = () => {
  return (
    <>
      <label className={style.label}>
        <p className={style.text}>Enter name</p>
        <input
          className={style.input}
          type="text"
          maxLength={36}
          minLength={4}
        ></input>
        <p className={style.error_text}>Invalid</p>
      </label>
      <h2 className={style.modal_title}></h2>
      <div className={style.bordered}>
        <div className={style.content}></div>
      </div>

      <Button name="accept" />
    </>
  );
};
