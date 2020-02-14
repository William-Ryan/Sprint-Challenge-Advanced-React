import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import PlayerCard from "./components/PlayerCard"

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
      this.setState({players: res.data})
    })
    .catch(err => {
      console.log(err, "This is not the data")
    })
  }

  render(){
    return (
      <div className ="App">
        <div className="container">
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
