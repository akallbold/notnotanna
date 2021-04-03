import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import ProjectNavbar from 'components/Navbars/ProjectNavbar'

// core components

function WorkPage() {
  return (
    <>
    <ProjectNavbar/>
      <div className="section section-feature cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Work</h2>
              
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="BCG logo"
                    src={require("assets/img/BCG_logo.png")}
                    style={{height:"50%", width:"50%"}}
                  />
                  </div>
                  <div className="description">
                    <h4 className="info-title">BCG</h4>
                    <p className="description">
                    September 2018 - Present
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="GCP Solutions Architect badge"
                    src={require("assets/img/hh.png")}
                    style={{height:"50%", width:"50%"}}
                  />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hugo and Hoby</h4>
                    <p>
                    Summer of 2016
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="GCP Associate Cloud Engineer badge"
                    src={require("assets/img/Accenture-Logo.png")}
                    style={{height:"50%", width:"50%"}}
                  />                  </div>
                  <div className="description">
                    <h4 className="info-title">Accenture</h4>
                    <p>
                      June 2011 - June 2015
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="AWS Cloud Developer badge"
                    src={require("assets/img/ml.png")}
                    style={{height:"50%", width:"50%"}}
                  />                 
                   </div>
                  <div className="description">
                    <h4 className="info-title">Merrill Lynch</h4>
                    <p>
                    June 2010 - May 2011
                    </p>
                 
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

export default WorkPage;
