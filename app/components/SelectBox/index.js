import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return(
      <select name={this.props.name} className="input-field" value={this.state.value} onChange={this.onChange.bind(this)}>
        <option value=""></option>
        {this.props.options.map(option => {
          return <option value={option.value} key={option.value} checked={this.state.value === option.value}>{option.name}</option>
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