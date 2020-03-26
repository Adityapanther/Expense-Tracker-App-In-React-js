import React, {Component, } from 'react';
import './style.css';
import InputBox from './components/InputBox';

class App extends Component{


  render() {
    return (
      <div className="wrapper">
          <InputBox />
      </div>
    );
  }

}


export default App;
