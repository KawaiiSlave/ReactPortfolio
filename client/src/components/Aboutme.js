import React, { Component } from 'react';
import {Container, Row, } from 'react-bootstrap';



class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div
              style={{
                opacity: ".7",
                width: "50%",
                margin: "auto",
              }}
            >
              <h2
                style={{
                  marginTop: "200px",
                  width: "100%",
                  border: "1px solid black",
                  padding: "10px",
                  boxShadow: "-1px 1px 10px 5px rgba(0,0,0,0.75)",
                  borderRadius: "25px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                My name is Tyler, and I am a recent full stack developer. I
                enjoy good food, a game or two in my spare time, and Anime
                conventions/cosplaying going hand in hand. My love for
                technology can only be trumped by my love for all things cute!
                Im a rather shy guy, but can be loads of fun once I warm up to
                you. I love listening to people, and have a great willingness to
                learn. If you need anyone to lean on, or just need a friend in
                general Ill be there for you as well!
              </h2>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;