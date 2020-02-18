import React, { useState } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const diceData = [
  {
    id: 1,
    url: "https://i.imgur.com/Bokc2lD.png"
  }, {
    id: 2,
    url: "https://i.imgur.com/4CU1Djn.png"
  }, {
    id: 3,
    url: "https://i.imgur.com/l49dPtV.png"
  }, {
    id: 4,
    url: "https://i.imgur.com/IqXMC8X.png"
  }, {
    id: 5,
    url: "https://i.imgur.com/puHuN2b.png"
  }, {
    id: 6,
    url: "https://i.imgur.com/2jZEjGP.png"
  }
]

function About() {

  //Just like in the last activity we can break up the first and second item in the array that useState returns to 
  //make using Hooks easier. In this example we are breaking up the stateful items we are tracking in `inputState`
  //(name, wallet,winner,data, and userGuess) and the function to change the state as `setState`.

  //This seperates concerns of the state. When we click randomize it will set  

  const [inputState, setState] = useState({
    userGuess: 0,
    randomRoll: "https://i.imgur.com/lbswV46.png"
  })

  const playGame = e => {
    e.preventDefault()
    var userGuess = inputState.userGuess
    var randomNumber = Math.floor(Math.random() * 6);

    if (parseInt(userGuess) === diceData[randomNumber].id) {
      alert("You Won")
    } else {
      alert('You lost')
    }
    //NOTICE HOW ONLY ONE STATE CHANGES
    setState({ userGuess: userGuess, randomRoll: diceData[randomNumber].url })
  }

  const handleInputChange = e => {
    e.preventDefault()
    let userGuess1 = e.target.value
    //NOTICE HOW ONLY ONE STATE CHANGES
    setState({ userGuess: userGuess1, randomRoll: inputState.randomRoll })
  }


  return (
    <div>
      <Hero backgroundImage="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_350,q_90,w_750/v1/clients/lasvegas/9162A76E5131D92FAC861416A9FE008A_2ec286f4-c45e-4811-84dd-c442f5d396b8.jpg">
        <h1>Magic Number Guess</h1>
        <h2>Enter a guess between 1-6 and roll the dice</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <h1 className="centerText">Enter a dice number guess and roll the dice</h1>
            <form className="centerForm">
              <input
                placeholder="enter guess"
                name="userInput"
                onChange={handleInputChange}
              />
              <button onClick={playGame}>Roll the dice</button>
            </form>
            <img className="centerImage" src={inputState.randomRoll} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
