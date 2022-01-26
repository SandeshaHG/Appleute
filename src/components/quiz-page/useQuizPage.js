/*
    Custom hook for the logic of Quiz screens
*/

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
const useQuizPage = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(state?.data?.[0]);
  const [rightlyAnswered, setRightlyAnswered] = useState(0);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [options, setOptions] = useState([]);

  /* On update of question number , the next question gets renderd.
     If the its the last question, the dashboard is gonna render with the right score */
  useEffect(() => {
    if (questionNumber < state?.data.length)
      setCurrentQuestion(state?.data?.[questionNumber]);
    else {
      dispatch({ type: "SET_RESULT", payload: rightlyAnswered });
      goBackToHomePage();
    }
    setSelectedOption(state?.answered?.[questionNumber]);
  }, [questionNumber]);

  /*Since api returns correct answer and incorrect answers seperately,
    it's important to randomise array of incorrect answers and correct answer
    */
  useEffect(() => {
    let arr = currentQuestion?.incorrect_answers?.slice();
    const ran = Math.floor(Math.random() * 3);
    arr?.splice(ran, 0, currentQuestion?.correct_answer);
    setOptions(arr);
  }, [currentQuestion]);

  //Function to redirect screen to dashboard
  const goBackToHomePage = () => {
    dispatch({ type: "SCREEN_TYPE", payload: "landing-page" });
  };

  //On click of next question
  const nextQuestion = () => {
    if (selectedOption === currentQuestion?.correct_answer) {
      setRightlyAnswered((ans) => ans + 1);
    }
    dispatch({
      type: "SET_ANSWERED",
      payload: {
        ...state?.answered,
        [questionNumber]: selectedOption,
      },
    });
    setQuestionNumber((num) => num + 1);
    setSelectedOption(undefined);
  };

  //On click of back button
  const previousQuestion = () => {
    if (questionNumber === 0) return;
    setSelectedOption(state.answered?.[questionNumber - 1]);
    setQuestionNumber((num) => num - 1);
  };

  return {
    selectedOption,
    setSelectedOption,
    options,
    nextQuestion,
    questionNumber,
    currentQuestion,
    previousQuestion,
    goBackToHomePage,
  };
};

export default useQuizPage;
