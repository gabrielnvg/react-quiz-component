import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.module.scss';

function Progress({ numTotalQuestions, numCurrentQuestion }) {
  const isPast = i => i + 1 < numCurrentQuestion;
  const isCurrent = i => i + 1 === numCurrentQuestion;

  return (
    <div className={styles.progress}>
      <div className={styles.bullets}>
        {[...Array(numTotalQuestions)].map((e, i) => (
          <div
            key={`bullet-${i + 1}`}
            className={[
              styles.bullet,
              isPast(i) ? styles.past : '',
              isCurrent(i) ? styles.current : '',
            ].join(' ')}
          />
        ))}
      </div>

      <div className={styles.numbers}>
        <strong>{numCurrentQuestion}</strong>
        <span>/</span>
        <span>{numTotalQuestions}</span>
      </div>
    </div>
  );
}

Progress.propTypes = {
  numTotalQuestions: PropTypes.number.isRequired,
  numCurrentQuestion: PropTypes.number.isRequired,
};

export default Progress;
