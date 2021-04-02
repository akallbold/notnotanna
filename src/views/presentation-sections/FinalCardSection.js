import React from "react";

// reactstrap components
import { Link } from "react-router-dom";

import { Card, CardBody, CardTitle, Container, Row, Col, NavLink } from "reactstrap";
import {constants} from "data/constants"

function FinalCardSection() {

  return (
    <>
      <div className="section section-overview section-nude">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title">A little bit about me</h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                <Link to="/work" target="_blank" tag={Link}>
                  <Card data-background="color" data-color="green" >
                 
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-badge" />
                      </div>
                      <CardTitle tag="h4">Work</CardTitle>
                      <p className="card-description">
                        {constants.aboutMeCards.work}
                      </p>
                    </CardBody>
          
                  </Card>
                  </Link>
                </Col>
                <Col sm="3">
                <Link to="/education" target="_blank" tag={Link}>
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-hat-3" />
                      </div>
                      <CardTitle tag="h4">Education</CardTitle>
                      <p className="card-description">
                      {constants.aboutMeCards.education}
                      </p>
                    </CardBody>
                  </Card>
                  </Link>
                </Col>
                <Col sm="3">
                <Link to="/certifications" target="_blank" tag={Link}>
                  <Card data-background="color" data-color="purple" >
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-trophy" />
                      </div>
                      <CardTitle tag="h4">Certifications</CardTitle>
                      <p className="card-description">
                        {constants.aboutMeCards.certifications}
                      </p>
                    </CardBody>
                  </Card>
                  </Link>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="brown">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-bulb-63" />
                      </div>
                      <CardTitle tag="h4">Walking</CardTitle>
                      <p className="card-description">
                        {constants.aboutMeCards.walking}
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

export default FinalCardSection;
