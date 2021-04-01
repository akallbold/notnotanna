/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
import {constants} from "data/constants"
// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href={constants.linkedinURL}
                    target="_blank"
                    className="mr-1"
                  >
                    Message me on LinkedIn
                  </a>
                </li>
                <li>
                  <a
                  href={constants.linkedinURL}
                    target="_blank"
                    className="mr-1"
                  >
                 
                  </a>
                </li>
                <li>
                  <a
                         href={constants.linkedinURL}
                    target="_blank"
                  >
                    
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by Creative Tim
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
