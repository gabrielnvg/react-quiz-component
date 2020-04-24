import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alternative.module.scss';

function Alternative({ alternative, isQuestionAnswered, onAnswerSelected }) {
  const isWrong =
    isQuestionAnswered && !alternative.isCorrect && alternative.isUserAnswer;
  const isCorrect = isQuestionAnswered && alternative.isCorrect;
  const isNotChosen =
    isQuestionAnswered && !alternative.isCorrect && !alternative.isUserAnswer;

  return (
    <div
      onClick={() => onAnswerSelected(alternative)}
      onKeyPress={() => onAnswerSelected(alternative)}
      role="button"
      tabIndex={0}
      className={[
        styles.alternative,
        isWrong ? styles.wrong : '',
        isCorrect ? styles.correct : '',
        isNotChosen ? styles['not-chosen'] : '',
        isQuestionAnswered ? styles['current-question-answered'] : '',
      ].join(' ')}
    >
      {alternative.text}
    </div>
  );
}

Alternative.propTypes = {
  alternative: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isUserAnswer: PropTypes.bool.isRequired,
    img: PropTypes.string,
  }).isRequired,
  isQuestionAnswered: PropTypes.bool.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Alternative;
