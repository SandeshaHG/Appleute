import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';

const useLandingPage = () => {
    const {state,dispatch} = useContext(GlobalContext)
    const startApp = () => {
        dispatch({type : 'SCREEN_TYPE',payload : 'quiz-page'})
    }
  return {
      startApp,
      state
  };
};

export default useLandingPage;
