import React from 'react';
import PropTypes from 'prop-types';
import styles from './Start.module.scss';

import Button from '../../common/Button/Button';

function Start({ title, description, img = '', onClickStart }) {
  return (
    <div className={styles.start}>
      {img && (
        <img
          alt="Quiz start"
          src={require(`../../assets/images/start/${img}`)}
          className={styles['header-img']}
        />
      )}

      <h3 className={styles.title}>
        <strong>{title}</strong>
      </h3>

      <p className={styles.description}>{description}</p>

      <div className={styles['start-button-container']}>
        <Button
          text="Start"
          onButtonClick={onClickStart}
        />
      </div>
    </div>
  );
}

Start.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  onClickStart: PropTypes.func.isRequired,
};

export default Start;
