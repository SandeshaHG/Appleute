/*
    ----- This is the Redirecting page, called by App.js , to indicate which screen is to be renderd -----
*/

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import LandingPage from './landing-page/LandingPage';
import QuizPage from './quiz-page/QuizPage';
import axios from 'axios'
import ResultsPage from './results-page/ResultsPage';
import styles from './Redirect.module.css'
const Redirect = () => {
  const {state, dispatch} = useContext(GlobalContext)

  const redirect = () => {
    switch(state?.screen) {
        case 'landing-page':
            return <LandingPage/>
        case 'quiz-page' :
            return <QuizPage/>
        case 'results-page' :
            return <ResultsPage/>
        default:
            return <LandingPage/>
    }
  }
  useEffect(async () => {
      const res = await axios.get('https://opentdb.com/api.php?amount=25')
      res?.data?.results && dispatch({type : 'SET_DATA' , payload : res?.data?.results})
  },[])
    return (
        <div className={styles.root}>
            {redirect()}
        </div>
    )
  
};

export default Redirect;
