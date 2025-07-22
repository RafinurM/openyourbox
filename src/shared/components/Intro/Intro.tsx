import { BoardUI } from "@/shared/ui/board-ui/BoardUI";
import styles from "./Intro.module.scss";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login")
    }
  return (
    <>
      <BoardUI>
        <div className={styles.intro}>Intro</div>
        <Button className={styles.login_button} name='login' action={login}/>
      </BoardUI>
    </>
  );
};
