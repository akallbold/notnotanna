import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import SimpleNav from "components/Navbars/SimpleNav.js";
import { constants } from "data/constants";
import { doesNavWork } from "utils";
import { containerHeights } from "data/stylingConstants";

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
      {doesNavWork() ? <SimpleNav white /> : null}
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
                    <h4>
                      <a
                        href={constants.bridgetLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bridget Deely
                      </a>
                      and I made a sticker app for folks working in an agile
                      environment. We have a sticker for every step of the
                      process, the good and the not so good. Download it today
                      for some fun agile stickers you can send via iMessage!
                    </h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <div className="details-text"> </div>

                <a
                  href="https://apps.apple.com/app/id1501776587"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="card-image">
                    <img
                      alt="Two octopi pair programming"
                      src={require("assets/img/Pair_Programming.png")}
                    />
                    <div style={{ height: containerHeights.medium }} />
                    <img
                      alt="App store badge"
                      src={require("assets/img/app-store.jpg")}
                      style={{ alignSelf: "center" }}
                    />
                  </Card>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Stickers;
