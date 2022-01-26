/*
    ----- This is the Quiz page i.e the screen to display questions-----
*/
import useQuizPage from './useQuizPage';
import styles from './QuizPage.module.css'
const QuizPage = () => {
    const {
        selectedOption,
        setSelectedOption,
        options,
        currentQuestion,
        previousQuestion,
        nextQuestion,
        questionNumber
    } = useQuizPage()
    return (
        <div className={styles.root}>
        <span  className={styles.category}>{currentQuestion?.category}</span>
        <div className={styles.container}>
            <div className={styles.question}>{`${questionNumber+1}. ${currentQuestion?.question}`}</div>
            <div className={styles.optionList}>
            {
                options.map((item) => {
                    return <div  className = {styles.options}onClick={() => {
                        setSelectedOption(item)
                        console.log("clicked")
                    }}>
                        <input type="radio" id={item} name={selectedOption} value={selectedOption} checked={item === selectedOption} onChange={() => {
                        setSelectedOption(item)
                        console.log("clicked")
                    }}/> <label>{item}</label>
                    </div>
                })
            }
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={previousQuestion} disabled={questionNumber <= 0}>Back</button>
                <button  className={styles.button}onClick={nextQuestion} disabled={!selectedOption}>Next</button>
            </div>
        </div>
        </div>
    ); 
};

export default QuizPage;
