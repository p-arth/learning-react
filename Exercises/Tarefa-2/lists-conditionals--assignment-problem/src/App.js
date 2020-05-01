import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textLength: 0
    };
  };

  textLengthHandler = (event) => {
    this.setState({
      text: event.target.value,
      textLength: [...event.target.value].length
    });
  };

  deleteCharHandler = (index) => {
    const text = [...this.state.text];
    text.splice(index, 1);
    this.setState({
      text: text.join(''),
      textLength: text.length
    });
  };

  render() {

    let chars = [...this.state.text].map((c, i) => {
      return <CharComponent
        key={i}
        click={() => this.deleteCharHandler(i)}
      >{c}</CharComponent>;
    });

    return (
      <div className="App">

        <input
          type="text"
          onChange={ (event) => this.textLengthHandler(event) }
          value={this.state.text} />
        <p>{this.state.text.length}</p>
        <div>
          <ValidationComponent textLength={this.state.textLength} />
          {chars}
        </div>

      </div>
    );
  }
}

export default App;
