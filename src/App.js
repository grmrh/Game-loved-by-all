import React, { Component } from 'react';
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import memoryCards from "./memoryCards.json";
import './bootstrap.min.css';
import "./App.css";

class App extends Component {

  // values show up in UI
  state = {
    memoryCards: memoryCards,
    score: 0,
    highScore: 0
  };

  // values not need to be tracked. Use internally for logic.
  variables = {
    clickedMemoryCardIds: []
  }

  // shuffle images and reload
  refreshHandler = () => {

    let selected = [];
    while(selected.length < 16) {
      const randomNumber = Math.floor(Math.random() * memoryCards.length );
      if (selected.some(e => e.id === randomNumber)) continue;
      selected.push({id: null, name:'', src:''});
      selected[selected.length-1].id = randomNumber;
      selected[selected.length-1].name = memoryCards[randomNumber].name ;
      selected[selected.length-1].src = memoryCards[randomNumber].src;
    }
    console.log(selected);
    // udpate memoryCards with shuffled re-ordered
    this.setState({ memoryCards: selected });
  }

  // respond to user clicking on a memory card
  clickHandler = id => {

    // check at least one card in [clicked memory cards] matches the clicked card 
    if (this.variables.clickedMemoryCardIds.length !== 0 && this.variables.clickedMemoryCardIds.includes( id)) {

      if (this.state.highScore < this.state.score ) {
        this.setState({highScore: this.state.score});
      }
      this.setState({score: 0});
      this.variables.clickedMemoryCardIds = [];
      console.log('score ', this.state.score);
      console.log('highScore ', this.state.highScore);
      console.log('variables.clickedMemoryCardIds ', this.variables.clickedMemoryCardIds);
    }
    else {
      this.setState({score: this.state.score+1});
      this.variables.clickedMemoryCardIds.push(id);
      console.log('score ', this.state.score);
      console.log('highScore ', this.state.highScore);
      console.log('variables.clickedMemoryCardIds ', this.variables.clickedMemoryCardIds);
    }   

    // reload
    this.refreshHandler();
  }

  // what you see in the SPA screen
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore}>Game loved by all</Navbar>
        <Title>Welcome to Memory Game</Title>
        <div className="App">
          <div className="row">
          <div className="col-md-12">
          {this.state.memoryCards.map(memoryCard => (

            <MemoryCard 
              clickHandler={this.clickHandler} // or clickHandler = {() => this.clickHandler()}
              id={memoryCard.id}
              key={memoryCard.id}
              name={memoryCard.name}
              src={memoryCard.src} />

          ))}
          </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
