import React, { useState } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  //The useState returns two items in one array. The first is the info about the state, and the second one is the function to call to change the state
  //Becase this is an array we can access the value of the state by inputState[0], which is equal to the integer 0. 
  //To change the state we need to call the function to do so, which is the second thing in the arraya and is accessed by inputState[1]()
  
  return (
    <div>
      <Hero backgroundImage="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_350,q_90,w_750/v1/clients/lasvegas/9162A76E5131D92FAC861416A9FE008A_2ec286f4-c45e-4811-84dd-c442f5d396b8.jpg">
        <h1>Add One with React Hooks</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
        
            <h1 className="move-to-center">Press the button below</h1>
            <button className="move-to-center-button">Add 1</button>
            <h1 className="move-to-center-tally">{inputState[0]}</h1>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
