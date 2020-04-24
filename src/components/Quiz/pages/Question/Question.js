import React from 'react';
import PropTypes from 'prop-types';
import styles from './Question.module.scss';

import Progress from './Progress/Progress';
import Alternative from './Alternative/Alternative';

function Question({
  quizTitle,
  numTotalQuestions,
  numCurrentQuestion,
  question,
  onAnswerSelected,
}) {
  return (
    <div className={styles.question}>
      <div className={styles['quiz-title']}>{quizTitle}</div>

      <Progress
        numCurrentQuestion={numCurrentQuestion}
        numTotalQuestions={numTotalQuestions}
      />

      {question.img && (
        <img
          alt="Current question"
          src={require(`../../assets/images/questions/${question.img}`)}
          className={styles['question-img']}
        />
      )}

      <div className={styles['question-text']}>
        <strong>{question.text}</strong>
      </div>

      <div className={styles.alternatives}>
        {question.alternatives.map(alternative => (
          <Alternative
            alternative={alternative}
            isQuestionAnswered={question.isAnswered}
            key={`alternative-${question.id}-${alternative.id}`}
            onAnswerSelected={onAnswerSelected}
          />
        ))}
      </div>
    </div>
  );
}

Question.propTypes = {
  quizTitle: PropTypes.string.isRequired,
  numTotalQuestions: PropTypes.number.isRequired,
  numCurrentQuestion: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string,
    isAnswered: PropTypes.bool.isRequired,
    alternatives: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        img: PropTypes.string,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Question;
