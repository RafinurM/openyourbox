import style from "./App.module.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GameBoardPage } from "./pages/GameBoardPage/GameBoardPage";
import { HeaderUI } from "./shared/ui/header-ui/HeaderUI";
import { Modal } from "./shared/ui/modal-ui";
import { LoginUI } from "./shared/ui/login-ui/LoginUI";
import { UserUI } from "./shared/ui/user-ui/UserUI";
import { Button } from "./shared/components/Button";
import { Stats } from "./shared/components/Stats/Stats";
import { Event } from "./shared/components/Event";

function App() {
  const navigate = useNavigate();
  const start = () => {
    console.log("start");
  };

  return (
    <>
      <div className={style.app}>
        <HeaderUI />
        <Routes location={{pathname: '/'}}>
          <Route path="/" element={<GameBoardPage />} />
        </Routes>
        {<Routes>
            <Route
              path="/login"
              element={
                <Modal isOpen onClose={() => navigate(-1)}>
                  <LoginUI />
                </Modal>
              }
            />
            <Route
              path="/events/:id"
              element={
                <Modal isOpen onClose={() => navigate(-1)}>
                  <Event />
                </Modal>
              }
            />
            <Route
              path="/test"
              element={
                <Modal isOpen onClose={() => navigate(-1)}>
                  <Event />
                </Modal>
              }
            />
          </Routes>}
        {
          <UserUI>
            <Button name="start" action={start} />
            <Button name="end" />
            <Button name="test" />
            <Button name="fire" />
            <Button name="stop" />
            <Stats />
          </UserUI>
        }
      </div>
    </>
  );
}

export default App;
