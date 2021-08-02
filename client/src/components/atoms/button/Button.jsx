import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  backgroundColor,
  size,
  children,
  type,
  onClick
}) => {
  return (
    <button
      type={type}
      className={['button', `button--${size}`, `button--${variant}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'tiny']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  type: PropTypes.string,

  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium'
  // onClick: undefined,
};
