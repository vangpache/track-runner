import React, { Component } from 'react';
import './App.css';

class App extends Component {


   runs = {
     mostRecent: 0,
     longestRun: 0
   }
 
 

  handleButton = (event) => {
    console.log('add run button was clicked:', this.runs);
    // this.setState({mostRecent: this.runs.user.mostRecent})
    this.setState({mostRecent: this.mostRecent})
  }


    handleMiles = (event) => {
    console.log(event.target.value);
    this.setState = ({ mostRecent: event.target.value })
    
  }




  render() {
    return (
      <div className="App">
       <h1>React Track Runner</h1>
        <input type="number" placeholder="Miles Ran" onChange={this.handleMiles} />
        <button onClick={this.handleButton}>Add New Run</button>
       <p>Recent Run: {this.runs.mostRecent}</p>
        <p>Longest Run:  {this.runs.longestRun}</p>
      </div>
    );
  }
}

export default App;
