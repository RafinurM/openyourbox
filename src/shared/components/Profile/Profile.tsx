import { useStats, useUser } from "@/shared/store/AppStore";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const stats = useStats();
  const user = useUser();
  return (
    <>
      <div className={styles.profile}>
        <h3 className={styles.name}>Player {user!.name}</h3>
        <ul className={styles.states}>
          <li className={styles.state}>
            <p>lucky: {stats.lucky}</p>
          </li>
          <li className={styles.state}>
            <p>score: {stats.score}</p>
          </li>
        </ul>
      </div>
    </>
  );
};
