import React from 'react';
import logo from './heart.svg';
import './App.css';
import Button from './components/button/Button';
import {createUseStyles} from 'react-jss';

class App extends React.Component {
  state = {
    firstButton: {
      text: 'Open first modal',
      action: ()=>{
        
      }
    },
    secondButton: {
      text: 'Open second modal',
    }
  }
  render() {
    const{firstButton, secondButton} = this.state;

    return (
      <div className="App">
        <Button text={firstButton.text}/>
        <Button text={secondButton.text}/>
      </div>
    );
  }
}

export default App;
