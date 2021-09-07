import React, { useEffect } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import SimpleNavbar from "components/Navbars/SimpleNav";
import { doesNavWork } from "utils";

// core components

function EducationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {doesNavWork() ? <SimpleNavbar /> : null}
      <div className="section section-feature cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Education</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="info">
                  <div className="icon icon-danger">
                    <img
                      alt="Yale logo"
                      src={require("assets/img/yale.png")}
                      style={{ height: "50%", width: "50%" }}
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Yale</h4>
                    <p className="description"></p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="info">
                  <div className="icon icon-danger">
                    <img
                      alt="Flatiron School logo"
                      src={require("assets/img/flatiron.png")}
                      style={{ width: "85%" }}
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Flatiron</h4>
                    <p></p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="info">
                  <div className="icon icon-danger">
                    <img
                      alt="Uconn Logo"
                      src={require("assets/img/uconn.png")}
                      style={{ width: "75%" }}
                    />{" "}
                  </div>
                  <div className="description">
                    <h4 className="info-title">UCONN</h4>
                    <p></p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default EducationPage;
