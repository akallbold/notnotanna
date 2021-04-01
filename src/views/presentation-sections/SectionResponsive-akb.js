import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function AKBSectionResponsive() {
  return (
    <>
      <div className="section section-responsive section-gold">
        <Container fluid>
          <Row>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">Mobile!</h3>
              <h6 className="category">The core elements of your website</h6>
              <h5 className="description">
                We re-styled every Bootstrap 4 element to match the Paper Kit
                style. All the Bootstrap 4 components that you need in a
                development have been re-design with the new look. Besides the
                numerous basic elements, we have also created additional
                classes. All these items will help you take your project to the
                next level.
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

export default AKBSectionResponsive;
