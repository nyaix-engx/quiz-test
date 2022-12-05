import styles from "@styles/components/_review-answers.module.scss";

const ReviewAnswers = ({ answeredQuestions }) => {
  const getView = () => {
    return Object.entries(answeredQuestions).map((data, index) => {
      return (
        <div key={`index_${index}`}>
          Ans {data[0]}. &nbsp;{data[1]}
        </div>
      );
    });
  };
  return (
    <div className={styles.review_answers_container}>
      <div className={styles.title}>Review Answers here</div>
      <div className={styles.selected_answers}>{getView()}</div>
    </div>
  );
};

export default ReviewAnswers;
