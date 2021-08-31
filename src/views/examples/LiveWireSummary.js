import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SimpleNav from "components/Navbars/SimpleNav.js";
import { constants } from "data/constants";

function LiveWireSummary() {
  document.documentElement.classList.remove("nav-open");
  console.log("consta", constants.livewireURL);
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
                    <h4>
                      This is an example of my professional work that I can
                      share! Our client was having difficulties selling electric
                      motorcycles to it's existing customer base, so they
                      decided to do a rebranding. I worked on this website that
                      was included with the announcement of the new brand.
                    </h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <div className="details-text"> </div>

                <Link href={constants.livewireURL} target="_blank">
                  <Card className="card-image">
                    <img
                      alt="Livewire.com"
                      src={require("assets/img/livewire-homepage.png")}
                    />
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LiveWireSummary;
