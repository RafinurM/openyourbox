import style from "./App.module.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HeaderUI } from "./shared/ui/header-ui/HeaderUI";
import { Modal } from "./shared/ui/modal-ui";
import { UserUI } from "./shared/ui/user-ui/UserUI";
import { Button } from "./shared/components/Button";
import { Stats } from "./shared/components/Stats/Stats";
import { Event } from "./shared/components/Event";
import { Login } from "./shared/components/Login/Login";
import { Stage } from "./shared/components/Stage/Stage";
// import { LoaderUI } from "./shared/ui/loader-ui/LoaderUI";
import { Profile } from "./shared/components/Profile/Profile";
import { ProtectedRoute } from "./shared/components/ProtectedRoute";
import {
  fetchAwards,
  fetchEvents,
  fetchItems,
  setIsLoad,
  useIsLoaded,
  useStage,
} from "./shared/store/AppStore";
import { useEffect } from "react";
import { LoaderUI } from "./shared/ui/loader-ui/LoaderUI";

function App() {
  const navigate = useNavigate();
  const isLoaded = useIsLoaded();
  const stage = useStage();

  // load data
  useEffect(() => {
    // ???? FIX PRELOADER
    const fe = async () => {
      await fetchItems();
      await fetchEvents();
      await fetchAwards();
      setIsLoad();
    };
    fe();
  });

  return (
    <>
      {isLoaded ? (
        <div className={style.app}>
          <HeaderUI />
          <Routes>
            <Route path="/" element={<Stage />} />
            <Route
              path="/login"
              element={
                <Modal isOpen onClose={() => navigate(-1)}>
                  <Login />
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
              path="/profile"
              element={
                <ProtectedRoute>
                  <Modal isOpen onClose={() => navigate(-1)}>
                    <Profile />
                  </Modal>
                </ProtectedRoute>
              }
            />
          </Routes>
          <UserUI>
            {stage ? (
              <>
                <Button name="end" />
                <Button name="test" />
                <Button name="fire" />
                <Button name="stop" />
                <Stats />
              </>
            ) : null}
          </UserUI>
        </div>
      ) : (
        <LoaderUI />
      )}
    </>
  );
}

export default App;
