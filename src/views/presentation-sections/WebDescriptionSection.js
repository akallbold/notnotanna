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
              <h3 className="title">
                Fullstack Developer{" "}
                <span aria-label="women at computer" role="img">
                  👩‍💻
                </span>
              </h3>
              {/* <h6 className="category">The core elements of your website</h6> */}
              <h5 className="description">
                I am a fullstack developer, with a passion in emerging tech. My
                experience as an engineer at a consulting firm has provided me
                with the opportunity to work in many different industries and to
                explore the spectrum between rapid prototyping to production
                level applications.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WebDescriptionSection;
