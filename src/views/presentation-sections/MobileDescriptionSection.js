import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function MobileDescriptionSection() {
  return (
    <>
      <div className="section section-responsive section-gold">
        <Container fluid>
          <Row>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">...and then learned mobile development fast</h3>
              {/* <h6 className="category">The core elements of your website</h6> */}
              <h5 className="description">
                My mobile app experience started in React Native but also includes Kotlin. 
                Mobile brings added complexity of a small screen, weaker network access and less computational power, 
                which encourages me to use my design brain more. 
              </h5>
            </Container>
          </Col>
            <Col md="6">
              <div className="phone-container">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/responsive.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MobileDescriptionSection;
