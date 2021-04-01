import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// core components

function AKBectionOverview() {
  return (
    <>
      <div className="section section-overview">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title">Want more details?</h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-money-coins" />
                      </div>
                      <CardTitle tag="h4">Work</CardTitle>
                      <p className="card-description">
                        I have worked as a software engineer, project manager, and a product owner. This experience has given me an end to end perspective on bringing a product from idea to fruition. I am an engineer because I love coding, but have the mindset of a product owner. 
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-watch-time" />
                      </div>
                      <CardTitle tag="h4">Education</CardTitle>
                      <p className="card-description">
                        With both an undergrad degree and graduate degree in Business, I understand the relationship between the bottom line and technology. Engineers can achieve anything, but they need the resources to do so. I understand how to prioritize technological decisions and can identify and communicate technological cost/benefit tradeoffs.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="purple">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <CardTitle tag="h4">Certifications</CardTitle>
                      <p className="card-description">
                        Whichever technology I am working on, I seek to become certified. It's important to me to understand what the people behind the technology want me to know as well as being a part of that community.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="brown">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-align-center" />
                      </div>
                      <CardTitle tag="h4">Walking</CardTitle>
                      <p className="card-description">
                        For some people it's in the shower, for others its at Esalen. For me, I get my biggest ideas while I am out walking.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AKBectionOverview;
