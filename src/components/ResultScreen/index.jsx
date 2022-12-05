import Icon from "@components/Icon";
import styles from "@styles/components/_final-screen.module.scss";
import { useEffect, useState } from "react";

const ResultScreen = ({ answeredQuestions, totalQuestions }) => {
  const [correctAnswers, setCorrectAnswers] = useState();

  useEffect(() => {
    getCorrectAnswers();
  });

  const getCorrectAnswers = () => {
    let count = 0;
    Object.entries(answeredQuestions).map((data, index) => {
      if (data[1] === totalQuestions[index].a) {
        count = count + 1;
      }
    });
    setCorrectAnswers(count);
  };

  const getPercentage = () => {
    return `${(correctAnswers * 100) / totalQuestions.length}%`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkmark_wrapper}>
        <Icon icon="checkmark" size="40px" color="green" />
      </div>
      <div className={styles.title}>
        You have successfully submitted the assignment.
      </div>
      <div className={styles.analyis_wrapper}>
        <div className={styles.analysis_row}>
          <div className={styles.flexIt}>Questions Asked</div>
          <div className={styles.flexIt}>{totalQuestions.length}</div>
        </div>
        <div className={styles.analysis_row}>
          <div className={styles.flexIt}>Questions Correct</div>
          <div className={styles.flexIt}>{correctAnswers}</div>
        </div>
        <div className={styles.analysis_row}>
          <div className={styles.flexIt}>Your Score</div>
          <div className={styles.flexIt}>{getPercentage()}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
