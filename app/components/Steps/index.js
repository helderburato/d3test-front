import React, { Component } from 'react';

class Steps extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.steps = [1, 2, 3, 4];
    this.activeStep = this.getActiveStep();
  }

  getActiveStep() {
    return parseInt((typeof this.props.active !== 'undefined' ? this.props.active : 1));
  }

  isActiveStep(step) {
    return (this.activeStep === step ? 'active' : '');
  }

  render() {
    return(
      <ul className="steps">
        {
          this.steps.map((step, key) => {
            let active = this.isActiveStep(step);

            return (
              <li key={key} className={active}>
                <span className="steps__number">{step}</span>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Steps;