import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data);
      console.table(res.data);
      // this.setState({players: res.data})
      // console.log(this.state.players)
    })
    .catch(err => {
      console.log(err, "Dat aint right boi")
    })
  }

  render(){
    return (
      <div className ="App">
        <div className="container">
        
        </div>
      </div>
    );
  }
}

export default App;
