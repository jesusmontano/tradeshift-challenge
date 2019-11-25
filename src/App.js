import React from 'react';
import './App.css';
import { hasAllPositiveSides, determineType } from './util/helpers';
import '@tradeshift/elements'
import '@tradeshift/elements.button'
import '@tradeshift/elements.header'
import '@tradeshift/elements/src/vars.css'
import '@tradeshift/elements.icon'
import '@tradeshift/elements.note'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      side1: '',
      side2: '',
      side3: '',
      type: ''
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.setState({ type: determineType(this.state.side1, this.state.side2, this.state.side3) });
  }

  determineFeedback(side) { // Function responsible for returning the appropriate feedback/error message.
    if (side === '') { // In this case, the input field is empty.
      return (
        <div className="input-errors">
          <ts-icon type="info" icon="info" size="large"></ts-icon>
          <span>Please fill out the field above.</span>
        </div>
      )
    }

    side = Number(side); // Since the input field is not empty, it's converted to a number.

    if (side > 0) { // In this case, the input is a number greater than zero which is a valid length.
      return (
        <div className="input-errors">
          <ts-icon type="success" icon="checkmark" size="large"></ts-icon>
          <span>Input is valid.</span>
        </div>)
    } else { // In this case, the input is either NaN or a number less than 0.
      return (
        <div className="input-errors">
          <ts-icon type="error" icon="close-clear" size="large"></ts-icon>
          <span>Must be a positive numeric character.</span>
        </div>
      )
    }
  }

  render() {
    let side1Feedback = this.determineFeedback(this.state.side1); // Feedback/error message for first side input.
    let side2Feedback = this.determineFeedback(this.state.side2); // Feedback/error message for second side input.
    let side3Feedback = this.determineFeedback(this.state.side3); // Feedback/error message for third side input.
    let impossibleTriangleMessage = this.state.type === 'Not Possible' ? <ts-note type="neutral" icon="remove">No one side can be greater than or equal to the sum of the two others.</ts-note> : '';
    let button = hasAllPositiveSides(this.state.side1, this.state.side2, this.state.side3) ? <ts-button onClick={this.handleSubmit} type="primary">Submit</ts-button> : <ts-button disabled="true" type="primary">Submit</ts-button>
    // If all of the inputs have positive side lengths, the submit button is enabled, otherwise it's disabled.

    return (
      <div className="main-div">
        <ts-header title="Tradeshift Triangle Challenge" color="blue"></ts-header>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <div className="inputs-div">
            <div className="individual-input">
              <label>First Side</label>
              <input type='text' required="required" value={this.state.side1} onChange={this.update('side1')} placeholder="Enter a length." ></input>
              {side1Feedback}
            </div>
            <br></br>
            <div className="individual-input">
              <label>Second Side</label>
              <input type='text' required="required" value={this.state.side2} onChange={this.update('side2')} placeholder="Enter a length."></input>
              {side2Feedback}
            </div>
            <br></br>
            <div className="individual-input">
              <label>Third Side</label>
              <input type='text' required="required" value={this.state.side3} onChange={this.update('side3')} placeholder="Enter a length."></input>
              {side3Feedback}
            </div>
          </div>
          <br></br>
          {button}
          <br></br>
        </form>
        <div className="triangle-type-div">
          <h3>Triangle Type:</h3>
          <h1>{this.state.type}</h1>
          {impossibleTriangleMessage}
        </div>
     </div>
    )
  }
}

export default App;
