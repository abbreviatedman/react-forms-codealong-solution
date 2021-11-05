import React from "react";
import emojify from "./emojify";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      feature: 'reverse',
      result: 'Type something above to see what you get!',
    };
  }

  handleInputChange = (event) => {
    if (this.state.feature === 'reverse') {
      this.setState({
        userInput: event.target.value,
        result: event.target.value.split('').reverse().join(''),
      })
    } else if (this.state.feature === 'emojify') {
      this.setState({
        userInput: event.target.value,
        result: emojify(event.target.value),
      })

    }
  }

  handleFeatureChange = (event) => {
    this.setState({feature: event.target.value})
  }

  clearText = (event) => {
    event.preventDefault();
    this.setState({userInput: ''})
  }

  render() {
    return (
      <main>
        <form className="App">
          <input
            id="user_input"
            name="user_input"
            type="text"
            value={this.state.userInput}
            onChange={this.handleInputChange}
          />

          <select
            id="operation"
            name="operation"
            onChange={this.handleFeatureChange}
          >
            <option value="reverse">reverse</option>
            <option value="emojify">emojify</option>
          </select>

          <button onClick={this.clearText}>Clear Text</button>
        </form>

        <section id="result">
          <p>Current feature: {this.state.feature}</p>
          <p>You typed: {this.state.userInput}</p>
          <p>Result: {this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
