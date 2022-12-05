import Icon from "@components/Icon";
import cx from "classnames";
import styles from "@styles/components/_main-screen.module.scss";
import { useState } from "react";

const MainScreen = ({
  totalQuestions,
  currentQuestion,
  setCurrentQuestion,
  answeredQuestions,
  setAnsweredQuestions,
  setEndTest,
}) => {
  return (
    <div className={styles.main_screen_wrapper}>
      <div className={styles.header}>
        <div
          className={cx(styles.arrow, {
            [styles.disabled]: currentQuestion === 0,
          })}
          onClick={() =>
            currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)
          }
        >
          <Icon
            icon="arrow-left"
            size="40px"
            color={currentQuestion > 0 ? "#000000" : "#808080"}
            className={styles.arrow}
          />
        </div>
        <div className={styles.header_text}>Attempt questions here</div>
        <div
          className={cx(styles.arrow, {
            [styles.disabled]: currentQuestion === totalQuestions.length - 1,
          })}
          onClick={() =>
            currentQuestion < totalQuestions.length - 1 &&
            setCurrentQuestion(currentQuestion + 1)
          }
        >
          <Icon
            icon="arrow-right"
            size="40px"
            color={
              currentQuestion < totalQuestions.length - 1
                ? "#000000"
                : "#808080"
            }
          />
        </div>
      </div>
      <div className={styles.question_text}>
        Q{currentQuestion + 1}&nbsp;&nbsp;
        {totalQuestions[currentQuestion].q}
      </div>
      <div className={styles.options_wrapper}>
        {totalQuestions[currentQuestion].o.map((data, index) => (
          <div
            key={`index_${index}`}
            className={cx(styles.option, {
              [styles.answered]: answeredQuestions[currentQuestion] === data,
            })}
            onClick={() =>
              setAnsweredQuestions({
                ...answeredQuestions,
                [currentQuestion]: data,
              })
            }
          >
            {index + 1}.&nbsp; {data}
          </div>
        ))}
      </div>
      {totalQuestions.length === Object.entries(answeredQuestions).length && (
        <div className={styles.cta_wrapper}>
          <button
            className={styles.submit_button}
            onClick={() => setEndTest(true)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MainScreen;
