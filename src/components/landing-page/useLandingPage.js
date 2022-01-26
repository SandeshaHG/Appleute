/*
    Custom hook for the logic of Landing page
*/

import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";

const useLandingPage = () => {
  const { state, dispatch } = useContext(GlobalContext);

  // Starts application (quiz screens)
  const startApp = () => {
    dispatch({ type: "SCREEN_TYPE", payload: "quiz-page" });
  };
  return {
    startApp,
    state,
  };
};

export default useLandingPage;
