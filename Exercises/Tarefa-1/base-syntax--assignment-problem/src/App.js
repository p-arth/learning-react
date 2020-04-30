import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'p-arth'
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    })
  };

  render() {
    const style = {
      margin: '25px auto',
      textAlign: 'center',
    };

    return (
      <div
        className="App"
        style={style}>
        <UserInput
          changed={this.changeUsernameHandler}
          username={this.state.username} />
        <UserOutput
          username={this.state.username} />
      </div>
    );
  }
}

export default App;
