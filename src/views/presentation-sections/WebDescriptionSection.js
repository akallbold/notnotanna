import React from "react";
import { Container, Row, Col } from "reactstrap";

function WebDescriptionSection() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/presentation-page/laptop-basic.png")}
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/table.jpg")}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={require("assets/img/presentation-page/share-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={require("assets/img/presentation-page/coloured-card-with-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={require("assets/img/presentation-page/coloured-card.png")}
              />
              <img
                alt="..."
                className="social-img"
                src={require("assets/img/presentation-page/social-row.png")}
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={require("assets/img/presentation-page/pin-btn.png")}
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">Started in Web Development...</h3>
              {/* <h6 className="category">The core elements of your website</h6> */}
              <h5 className="description">
                I am a fullstack developer. 
                Most of my experience is in React but I am always open to 
                learning and embracing new frameworks and technologies.

              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WebDescriptionSection;
