import React, { Component } from 'react';
import './App.css';

class App extends Component {
   state = { 
     text:"" 
   } 
   handleInput = this.handleInput.bind(this); 
   handleInput (e) { 
    this.setState({ 
      text: e.target.value 
    }) 
   } 

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handleInput}/> 
         <p className="repeater">{this.state.text}</p> 
      </div>

    );
  }
}

export default App;
