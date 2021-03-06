import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    const $input = this.inputElement.input;
    const $parent = $input.parentElement;

    this.toggleClass($parent, 'input__group__error', nextProps['data-error']);
    this.toggleClass($input, 'input-field__error', nextProps['data-error']);
  }

  toggleClass($el, className, toggle = false) {
    if (toggle) {
      $el.classList.add(className);
    } else {
      $el.classList.remove(className);
    }
  }

  render() {
    let props = Object.assign({}, this.props);

    return(
      <InputMask 
        {...this.props}
        ref={(node) => (this.inputElement = node)}
      />
    );
  }
}

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