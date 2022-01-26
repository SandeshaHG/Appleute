import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';
const useQuizPage = () => {
    const {state, dispatch} = useContext(GlobalContext)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(state?.data?.[0])
    const [rightlyAnswered , setRightlyAnswered] = useState(0)
    const [selectedOption, setSelectedOption] = useState(undefined)
    const [options, setOptions] = useState([])
    useEffect(() => {
        if(questionNumber<state?.data.length) setCurrentQuestion(state?.data?.[questionNumber])
        else {
            console.log("rightly answered",rightlyAnswered)
            dispatch({type : 'SET_RESULT', payload : rightlyAnswered})
            dispatch({type : 'SCREEN_TYPE', payload: 'landing-page'})
        }
        setSelectedOption(state?.answered?.[questionNumber])
        console.log("answered",state?.answered)
    },[questionNumber])

    useEffect(() => {
        let arr = currentQuestion?.incorrect_answers?.slice()
        const ran = Math.floor(Math.random() * 3)
        arr?.splice(ran,0,currentQuestion?.correct_answer)
        setOptions(arr)
    },[currentQuestion])

    const nextQuestion = () => {
        if(selectedOption === currentQuestion?.correct_answer) {
            setRightlyAnswered(ans => ans +1)
        }else {
            console.log('wrong')
        }
        dispatch({type : 'SET_ANSWERED', payload : {
            ...state?.answered,
            [questionNumber] : selectedOption
        }})
        setQuestionNumber(num => num+1)
        setSelectedOption(undefined)
        console.log(selectedOption)
    }
    const previousQuestion = () => {
        if(questionNumber === 0) return
        setSelectedOption(state.answered?.[questionNumber-1])
        setQuestionNumber(num => num-1)
        console.log(selectedOption)
    }

  return {
    selectedOption,
    setSelectedOption,
    options,
    nextQuestion,
    questionNumber,
    currentQuestion,
    previousQuestion
  }
};

export default useQuizPage;
