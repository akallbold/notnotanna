import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function AKBFooter() {
  return (
    <>
   
      <footer className="footer footer-big">
        <Container>
          <Row>
            <Col md="6" sm="9">
              <div className="links">
                <ul className="uppercase-links">
                  <li className="mr-1">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Home
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      LinkedIn
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Email
                    </a>
                  </li>
                
                </ul>
                <hr />
                
              </div>
            </Col>
           
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AKBFooter;
