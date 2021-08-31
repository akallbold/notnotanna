import React from "react";

// reactstrap components
import { Link } from "react-router-dom";

import { Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import {constants} from "data/constants"

function FinalCardSection() {

  return (
    <>
      <div className="section section-overview section-nude" id="about-me">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title">A little bit about me</h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col md="4" sm="4">
                <Link to="/work" tag={Link}>
                  <Card data-background="color" data-color="green" >
                 
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-badge" />
                      </div>
                      <CardTitle tag="h4">Work</CardTitle>
                      <p className="card-description" style={{fontWeight:500}}>
                        {constants.aboutMeCards.work}
                      </p>
                    </CardBody>
          
                  </Card>
                  </Link>
                </Col>
                <Col md="4" sm="4">
                <Link to="/education" tag={Link}>
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-hat-3" />
                      </div>
                      <CardTitle tag="h4">Education</CardTitle>
                      <p className="card-description" style={{fontWeight:500}}>
                      {constants.aboutMeCards.education}
                      </p>
                    </CardBody>
                  </Card>
                  </Link>
                </Col>
                <Col md="4" sm="4">
                <Link to="/certifications" tag={Link}>
                  <Card data-background="color" data-color="purple" >
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-trophy" />
                      </div>
                      <CardTitle tag="h4">Certifications</CardTitle>
                      <p className="card-description" style={{fontWeight:500}}>
                        {constants.aboutMeCards.certifications}
                      </p>
                    </CardBody>
                  </Card>
                  </Link>
                </Col>
                {/* <Col sm="3">
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
                </Col> */}
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FinalCardSection;
