import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header/Header"
import "../index.css"

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

  const [diceVisualState, setStateVisual] = useState({
    randomRoll1: "",
    randomRoll1_id: 0,
    randomRoll2: "",
    randomRoll2_id: 0
  })

  const [userDataState, setUserData] = useState({
    name: "",
    wallet: "",
    winner: false,
  })

  const [finalUserData, setFinalUserData] = useState({
    name: "",
    wallet: 0,
    winner: false
  })

  const [rollResultsState, setRollState] = useState({
    firstRoll: true,
    numberOfRolls: 1,
    numberToGet: null
  })

  var winCheck = (roll1, roll2) => {
    if (rollResultsState.numberOfRolls === 2) {
      if ((roll1 + roll2 === 2) || (roll1 + roll2 === 3) || (roll1 + roll2 === 7)) {
        //setRollState({...rollResultsState, firstRoll:false, numberOfRolls:rollResultsState.numberOfRolls+1, numberToGet:roll1+roll2})
        alert("you won")
      } else {
        setRollState({ ...rollResultsState, firstRoll: false, numberOfRolls: rollResultsState.numberOfRolls + 1, numberToGet: roll1 + roll2 })
      }
    } else {
      let rollNumber = roll1 + roll2
      setRollState({ ...rollResultsState, numberOfRolls: rollResultsState.numberOfRolls + 1 })
      if (rollNumber === rollResultsState.numberToGet) {
        alert("You won")
      } else if (rollNumber === 2 || rollNumber === 3 || rollNumber === 12) {
        alert("You Loose")
      }
    }
  }

  useEffect(() => {

    let roll1 = diceVisualState.randomRoll1_id
    let roll2 = diceVisualState.randomRoll2_id

    winCheck(roll1, roll2)


  }, [diceVisualState.randomRoll2])

  const playGame = e => {
    e.preventDefault()
    //var userGuess = inputState.userGuess
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);


    setStateVisual({
      randomRoll1: diceData[randomNumber1].url, randomRoll1_id: diceData[randomNumber1].id,
      randomRoll2: diceData[randomNumber2].url, randomRoll2_id: diceData[randomNumber2].id
    })

  }

  const setCurrentUser = function (e) {
    e.preventDefault()
    console.log(finalUserData)
  }

  const handleInputChange = e => {
    e.preventDefault()
    setUserData({
      ...userDataState,
      [e.target.name]: e.target.value
    })

    setFinalUserData({
      ...userDataState,
      [e.target.name]: e.target.value
    })
  }

  const resetValues = () => {
    setUserData({ name: "", wallet: "", winner: "" })
  }



  return (
    <div>
      <h2 style={{marginLeft:700}}>Instructions:</h2><h4>On the first roll make sure to roll either 2, 3, or 7, if you roll . If that doesn't happen you are stuck with the 
        number that you rolled. For every subsequent roll, you can either win loose or keep rolling. To win you need to roll what number
        you rolled on your first roll, you loose if you roll a 2, 3, or 12 on your rolls subsequent to the first. If you roll anything that
        doesnt match any of those number you roll again. Good Luck! 
         </h4>
      <Hero backgroundImage="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_350,q_90,w_750/v1/clients/lasvegas/9162A76E5131D92FAC861416A9FE008A_2ec286f4-c45e-4811-84dd-c442f5d396b8.jpg">
        <Header userName={finalUserData.name} userMoney={finalUserData.wallet} />
      </Hero>
      <Row>
          <Col size="md-10">
            <form className="centerForm" onSubmit={setCurrentUser}>
              <input
                value={userDataState.name}
                placeholder="Enter Name"
                name="name"
                onChange={handleInputChange}
              />
              <input
                value={userDataState.wallet}
                placeholder="Amout of $"
                name="wallet"
                onChange={handleInputChange}
              />
              <input type="submit" value="sumbit" onClick={resetValues} />
            </form>
          </Col>
        </Row>
        <h1 className="centerNumber">Number to get : {rollResultsState.numberToGet? rollResultsState.numberToGet: "Roll the dice"}</h1>
        <button style={{marginLeft:700, padding:30}} onClick={playGame}>Roll The Dice!</button>
        <div className="centerDice">
      {diceVisualState.randomRoll1 ? <img className="diceCenter" src={diceVisualState.randomRoll1} /> : ""}
      {diceVisualState.randomRoll2 ? <img src={diceVisualState.randomRoll2} /> : ""}
      </div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-2"/>
          <Col size="md-10">
          
            {/* <button onClick={randomize}>Add 1</button> */}
            <img style={{marginLeft:300}} src={diceVisualState.randomRoll1.url} />
            <img src={diceVisualState.randomRoll2.url} />
            
            {/* <h1>{inputState[0]}</h1> */}
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default About;
