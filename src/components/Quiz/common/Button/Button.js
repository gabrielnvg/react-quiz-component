import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({
  onButtonClick,
  text,
  iconLeft = '',
  iconRight = '',
  inlineStyle = {},
}) {
  return (
    <div className={styles['button-container']}>
      <button
        onClick={onButtonClick}
        type="button"
        className={styles.button}
        style={inlineStyle}
      >
        {iconLeft && (
          <span className={styles['icon-left']}>
            <img src={iconLeft} alt="Ícone ilustrativo do botão" />
          </span>
        )}

        <span>{text}</span>

        {iconRight && (
          <span className={styles['icon-right']}>
            <img src={iconRight} alt="Ícone ilustrativo do botão" />
          </span>
        )}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  inlineStyle: PropTypes.objectOf(PropTypes.string),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
};

export default Button;
