import React from 'react';
import PropTypes from 'prop-types';

const InputField = props =>
  <input {...props} />;

InputField.defaultProps = {
  type: 'text',
  className: 'input-field'
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default InputField;