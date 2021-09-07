import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function AKBSectionSections() {
  return (
    <>
      <div className="section section-sections section-nude">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">Fun Stuff</h2>
              <h5 className="description">
                Here are some projects I've worked on. They stem from wanting to
                learn new technologies for work to pure whimsy. Enjoy!
              </h5>
              <br />
              {/* <Button
                className="btn-rose btn-round"
                color="default"
                href="sections.html"
                target="_blank"
              >
                View All Sections
              </Button> */}
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Container fluid>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/header-1.jpg")}
                    onClick={() => {
                      console.log("clicked");
                    }}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/header-2.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/header-3.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/header-4.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/team-cards-social.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/bg-pricing-card.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/white-pricing-card.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/team-member-card.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/testimonials-1.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blog-bg-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/our-products.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/projects-cards.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blogpost-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blogpost-2-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/coloured-picind-card.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/team-3.jpg")}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AKBSectionSections;
