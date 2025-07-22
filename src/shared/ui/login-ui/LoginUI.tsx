import { Button } from "@/shared/components/Button";
import style from "./LoginUI.module.scss";

export const LoginUI = () => {

  return (
    <form noValidate className={style.form}>
      <div className={style.login}>
        <label className={style.label}>
          <span className={style.text}>Enter name</span>
          <input
            className={style.input}
            type="text"
            maxLength={36}
            minLength={4}
            placeholder="enter name here"
          ></input>
          <p className={style.error_text}>Invalid</p>
        </label>
        <label className={style.label}>
          <p className={style.text}>Enter password</p>
          <input
            className={style.input}
            type="text"
            maxLength={36}
            minLength={6}
            placeholder="enter password here"
          ></input>
          <p className={style.error_text}>Invalid</p>
        </label>
        <h2 className={style.modal_title}></h2>
        <div className={style.content}></div>
        <Button name="login"/>
      </div>
    </form>
  );
};
