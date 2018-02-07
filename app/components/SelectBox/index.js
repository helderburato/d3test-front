import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    const $input = this.inputElement;
    const $parent = $input.parentElement;

    this.toggleClass($parent, 'input__group__error', nextProps.error);
    this.toggleClass($input, 'input-field__error', nextProps.error);
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
    delete props.error;
    delete props.options;

    return(
      <select {...props} ref={(input) => (this.inputElement = input)} className="input-field">
        <option value=""></option>
        {this.props.options.map(option => {
          return <option value={option.value} key={option.value} checked={this.props.value === option.value}>{option.name}</option>
        })}
      </select>
    )
  }
}

SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectBox;