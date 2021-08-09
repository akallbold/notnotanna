import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components

import SimpleNav from "components/Navbars/SimpleNav";
// import ErrorPage from "views/examples/ErrorPage";

import { Link } from "react-router-dom";

function ErrorSummary() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-404");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-404");
    };
  });
  return (
    <>
      <SimpleNav/>
      <div
        className="background-img"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/martin-knize.jpg") + ")",
        }}
      >
        {/* <div className="filter" /> */}
        <Container>
          {/* <Row>
            <h4 
            class="discover-pages"
            style={{"margin-top":"100px"}}
            >
            Error pages are often viewed by people without a background in web-development. These error pages are friendly for all web users. 
       
            </h4>
          </Row> */}
          <Row>
            <h1 class="title">
              ERROR
              <br />
              <p class="error-msg"style={{"font-size":"20%"}}>            
              Error pages are often viewed by people without a background in web-development. 
              These error pages are friendly for all web users and also suggest next steps. 
              </p>
            </h1>
          </Row>
          <div className="container-cards">
            <Row>
              {/* <h5 className="discover-pages text-center">Different Error Pages</h5> */}
              <br />
              <br />
              <br />
            </Row>
            <Row>
              <Container>
                <Row>
                  <Col md="3">
                    <Card className="card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"301" ,
                          text:"Something used to exist at this URL but has since been moved. Your browser should take you to the correct site momentarily, but if not there may be an updated link that will get you to the right place." ,
                          link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301"
                        },
                      }}
                    >
                      <CardBody className="text-center">
                        {/* <div className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-desktop" />
                          </a>
                        </div> */}
                        <p className="card-description">
                          301
                        </p>
                      </CardBody>
                      </Link>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"408" ,
                          text:"Something went wrong, but it's not on you! Try to refresh the page, but that may not do the trick" ,
                          link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408"
                        },
                      }}
                    >
                      <CardBody className="text-center">
                
                        <p className="card-description">408</p>
                      </CardBody>
                      </Link>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"401" ,text:"You aren't authorized to view this site. If you think you should be able to view this site, make sure you are logged in with the right account. If the issue persists, reach out to your admin." ,
                          link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401"
                        },
                      }}
                    >
                      <CardBody className="text-center">
                       
                        <p className="card-description">401</p>
                      </CardBody>
                      </Link>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"429" ,
                          text:"Woah! If you're here it means you probably clicked an ENTER or SUBMIT button a few too many times. Go back, press the ENTER or SUBMIT button ONCE, and wait and hopefully that will do the trick" ,
                          link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429"
                        },
                      }}
                    >
                      <CardBody className="text-center">
                
                        <p className="card-description">429</p>
                      </CardBody>
                      </Link>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"403" ,text:"There is no reason for you to be here. Make sure you have the right link." ,link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
                        },
                      }}
                    >
                      <CardBody className="text-center">
                  
                        <p className="card-description">403</p>
                      </CardBody>
                      </Link>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"500" ,
                          text:"The good news is, it's not you! The bad news is, we don't know a whole lot more than that." ,
                          link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500"
                        },
                      }}
                    >
                      <CardBody className="text-center">
                  
                        <p className="card-description">500</p>
                      </CardBody>
                      </Link>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"404" ,text:"The page you requested could not be found" ,link:""
                        },
                      }}
                    >
                      <CardBody className="text-center" 
                      >
                        <p className="card-description">404</p>
                      </CardBody>
                      </Link>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                    <Link
                      to={{
                        pathname: "/error-page",
                        state: {
                          code:"503" ,text:"The page you requested could not be found" ,link:""
                        },
                      }}
                    >
                      <CardBody className="text-center">
                      
                        <p className="card-description">503</p>
                      </CardBody>
                      </Link>
                    </Card>
                  </Col>
                  
                </Row>
              </Container>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ErrorSummary;
