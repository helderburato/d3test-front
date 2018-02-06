import React from 'react';
import PropTypes from 'prop-types';

const Button = props =>
  <button {...props}>{props.children}</button>;

Button.defaultProps = {
  type: 'button',
  className: 'button'
};

Button.propTypes = {
  type: PropTypes.string.isRequired
};

export default Button;