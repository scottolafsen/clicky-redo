import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Nav from "./components/Nav";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    gameState: "",
    clickedImg: []
  };

 handleClick = id => {
   if (this.state.clickedImg.indexOf(id) === -1){
     this.state.clickedImg.push(id);
    this.setState({ score: this.state.score + 1,  gameState: "Nice Guess" });
    if (this.state.score >= this.state.highScore){
      this.setState({ highScore: this.state.score + 1});
    }
   } else if (this.state.clickedImg.indexOf(id) > -1){ this.setState({ score: 0,  gameState: "Game Over", clickedImg: [] });

   }
   this.setState({ friends: this.state.friends.sort( () => Math.random() - 0.5) });
 }

  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
          gameState={this.state.gameState}
        />
        <Container>
        {this.state.friends.map(friend => (
          <FriendCard
            name={friend.name}
            image={friend.image}
            id={friend.id}
            handleClick={this.handleClick}
          />
        ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
