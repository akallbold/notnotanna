import { constants } from "data/constants";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "reactstrap";

function FunStuffSection() {
  return (
    <>
      <div className="section section-examples section-white" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h2 className="title">Fun Stuff!</h2>
              <h5 className="description">
              Here are some projects I've worked on. They stem from wanting to learn new technologies for work to pure whimsy. Enjoy!

              </h5>
            </div>
          </Row>
          <Row>
            <Col md="4">
            {/* <a
                    href={constants.theHundredYearsURL}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mr-1"
                  >
              <div className="details-text">The Hundred Years</div>
              <Card className="card-image card-hover-effect">
                <Link to="/twitter-redesign" target="_blank"> 
                  <img
                    alt="Sad looking github sign"
                    src={require("assets/img/github-cover copy.JPG")}
                  />
               </Link> 
              </Card>
             
              </a> */}
          
              <div className="details-text">Error Pages</div>
              <Card className="card-image">
                <Link to="/error-summary" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/422.png")}
                  />
                </Link>
              </Card>
           
            </Col>
            <Col md="4">
            {/* <a
                    href={constants.livewireURL}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mr-1"
                  > */}
              <div className="details-text">LiveWire Homepage</div>
                  <Link to="/livewire-summary" target="_blank">
              <Card className="card-image card-hover-effect">
                {/* <Link to="/twitter-redesign" target="_blank"> */}
                  <img
                    alt="livewire homepage"
                    src={require("assets/img/livewire-homepage.png")}
                  />
                {/* </Link> */}
              </Card>
                  </Link>
             
              <div className="details-text">Marcus Aurelius Haiku Generator</div>
              <Card className="card-image">
                <Link to="/meditations" target="_blank">
                  <img
                    alt="Marcus Aurelius"
                    src={require("assets/img/marcus.jpg")}
                  />
                </Link>
              </Card>
         
             
              <div className="details-text">My favorite things</div>
              <Card className="card-image">
                <Link to="/favorite-things" target="_blank">
                  <img
                    alt="Chef's Kiss"
                    src={require("assets/img/kiss.png")}
                  />
                </Link>
              </Card>
         
            </Col>
            <Col md="4">
              <div className="details-text">iOS Sticker App</div>
              
              <Card className="card-image">
                <Link to="/stickers" target="_blank">
                  <img
                    alt="Two octopi pair programming"
                    src={require("assets/img/Pair_Programming.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Falling Resume</div>
              <Card className="card-image">
                <Link to="/profile-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/profile.png")}
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FunStuffSection;
