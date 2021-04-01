import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import ProjectNavbar from 'components/Navbars/ProjectNavbar'

// core components

function EducationPage() {
  return (
    <>
    <ProjectNavbar/>
      <div className="section section-feature cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Education</h2>
              
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="BCG logo"
                    src={require("assets/img/AWS-Developer-Associate-2020.png")}
                    style={{height:"50%", width:"50%"}}
                  />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Yale</h4>
                    <p className="description">
             
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="GCP Solutions Architect badge"
                    src={require("assets/img/gcp_cloud_arch.png")}
                    style={{height:"50%", width:"50%"}}
                  />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Flatiron</h4>
                    <p>
                    
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="GCP Associate Cloud Engineer badge"
                    src={require("assets/img/gcp_cloud_eng.png")}
                    style={{height:"50%", width:"50%"}}
                  />                  </div>
                  <div className="description">
                    <h4 className="info-title">UCONN</h4>
                    <p>
                     
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

export default EducationPage;
