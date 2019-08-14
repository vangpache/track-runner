import React, { Component } from 'react';
import './App.css';

class App extends Component {

  runs = {
    user: {
      mostRecent: 0,
      longestRun: 0
    }
    
  }

  handleButton = () => {
    console.log('add run button was clicked:', this.runs);
    // this.setState({mostRecent: this.runs.user.mostRecent})
  }


  handleMilesRan = (event, propertyName) => {
    this.setState({
      user: {
        ...this.runs.user,
        [propertyName]: event.target.value
      }
    })
  }




  render() {
    return (
      <div className="App">
       <h1>React Track Runner</h1>
        <input type="number" placeholder="Miles Ran" onChange={(event) => this.handleMilesRan(event, 'mostRecent')}/>
        <button onClick={this.handleButton}>Add New Run</button>
       <p>Recent Run: {this.runs.user.mostRecent}</p>
       <p>Longest Run: {this.runs.user.longestRun} </p>
      </div>
    );
  }
}

export default App;
