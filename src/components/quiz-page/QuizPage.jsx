/*
    ----- This is the Quiz page i.e the screen to display questions-----
*/
import useQuizPage from "./useQuizPage";
import styles from "./QuizPage.module.css";
const QuizPage = () => {
  const {
    selectedOption,
    setSelectedOption,
    options,
    currentQuestion,
    previousQuestion,
    nextQuestion,
    questionNumber,
    goBackToHomePage,
  } = useQuizPage();
  return (
    <div>
      <button className={styles.backButton} onClick={goBackToHomePage}>
        {"<"}
      </button>
      <div className={styles.root}>
        <div className={styles.container}>
          <span
            className={styles.category}
          >{`${currentQuestion?.category}`}</span>
          <div className={styles.question}>{`${questionNumber + 1}. ${
            currentQuestion?.question
          }`}</div>
          <div className={styles.optionList}>
            {options.map((item) => {
              return (
                <div
                  className={styles.options}
                  onClick={() => {
                    setSelectedOption(item);
                  }}
                >
                  <input
                    type="radio"
                    id={item}
                    name={selectedOption}
                    value={selectedOption}
                    checked={item === selectedOption}
                    onChange={() => {
                      setSelectedOption(item);
                    }}
                  />{" "}
                  <label>{item}</label>
                </div>
              );
            })}
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={previousQuestion}
              disabled={questionNumber <= 0}
            >
              Back
            </button>
            <button
              className={styles.button}
              onClick={nextQuestion}
              disabled={!selectedOption}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
