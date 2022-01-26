/*
    ----- This is the Landing page or the Dashboard -----
*/

import useLandingPage from "./useLandingPage";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const { state, startApp } = useLandingPage();
  return (
    <div className={styles.root}>
      <span className={styles.welcome}>
        Welcome to the Appleute Quiz Contest
      </span>
      <div className={styles.content}>
        <div className={styles.contentRoot}>
          <div className={styles.flexingBox}>
            <div className={styles.startContainer}>
              <div className={styles.boxTitle}>General Knowledge</div>
              <div className={styles.buttons}>
                <div>
                  {state.result === undefined
                    ? "Not Started"
                    : `Score: ${state.result}/${state.data.length} `}
                </div>
                <button
                  onClick={startApp}
                  style={{
                    float: "right",
                  }}
                >
                  {state.result === undefined ? "Start" : `Redo`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
