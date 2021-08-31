import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import SimpleNav from "components/Navbars/SimpleNav.js";

function Stickers() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <SimpleNav />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/soroush-karimi.jpg") + ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-mobile" />
                  </div>
                  <div className="description">
                    <h4><a href="https://www.linkedin.com/in/bridget-deely-b7854a98/" target="_blank" rel="noopener noreferrer">Bridget Deely </a> 
                      and I made a sticker app for folks working in an agile environment. We have a sticker for every step of the process, the good and the not so good. 
                      Download it today for some fun agile stickers you can send via iMessage!
            
                    </h4>
             
                  </div>
                </div>
               
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
              <div className="details-text"> </div>
              
              <Card className="card-image" >
                <Link href="https://apps.apple.com/app/id1501776587" target="_blank">
                  <img
                    alt="Two octopi pair programming"
                    src={require("assets/img/Pair_Programming.png")}
                  />
                    <img
                    alt="App store badge"
                    src={require("assets/img/app-store.jpg")}
                  />
                </Link>
              </Card>
              </Col>
            </Row>
          </Container>
  
        </div>
      </div>
    </>
  );
}

export default Stickers;
