import React from 'react';
import logo from './logo.svg';
import './App.css';
import { hasAllPositiveSides, determineType } from './util/helpers';


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

  handleSubmit(e) {
    e.preventDefault();
    return this.setState({ type: determineType(this.state.side1, this.state.side2, this.state.side3) });
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
