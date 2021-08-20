import React from "react";

import {
  Container,
  Row,
  Col,
} from "reactstrap";
import SimpleNavbar from 'components/Navbars/SimpleNav'

function CertificationsPage() {
  return (
    <>
    <SimpleNavbar/>
      <div className="section section-feature cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Certifications</h2>
              
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="AWS Cloud Developer badge"
                    src={require("assets/img/AWS-Developer-Associate-2020.png")}
                    style={{height:"50%", width:"50%"}}
                  />
                  </div>
                  <div className="description">
                    <h4 className="info-title">AWS Cloud Developer</h4>
                    <p className="description">
                      Expires 2022
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
                    <h4 className="info-title">GCP Cloud Architect</h4>
                    <p>
                    Expires 2022
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
                    <h4 className="info-title">GCP Cloud Engineer</h4>
                    <p>
                      Expires November 2022
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="AWS Cloud Developer badge"
                    src={require("assets/img/AWS-CloudPractitioner-2020.png")}
                    style={{height:"50%", width:"50%"}}
                  />                 
                   </div>
                  <div className="description">
                    <h4 className="info-title">AWS Cloud Practitioner</h4>
                    <p>
                    Expires November 2022
                    </p>
                 
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
            <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="Lean Six Sigma - Green Belt badge"
                    src={require("assets/img/ss-badge.png")}
                    style={{height:"50%", width:"50%"}}
                  />                   
                   </div>
                  <div className="description">
                    <h4 className="info-title">Lean Six Sigma - Green Belt</h4>
                    <p>
                    No Expiration date
                    </p>
                 
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="Salesforce Service Cloud Consultant badge"
                    src={require("assets/img/sfdc-srvc-badge.png")}
                    style={{height:"50%", width:"50%"}}
                  />  
                  </div>
                  <div className="description">
                    <h4 className="info-title">Salesforce Service Cloud Consultant</h4>
                    <p>
                      Expired
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                  <img
                    alt="Salesforce Administrator badge"
                    src={require("assets/img/sfdc-admin-badge.png")}
                    style={{height:"57%", width:"57%"}}
                  />                   
                  </div>
                  <div className="description">
                    <h4 className="info-title">Salesforce Administrator</h4>
                    <p>
                    Expired
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

export default CertificationsPage;
