import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components

import SimpleNav from "components/Navbars/SimpleNav";
import ErrorPage from "views/examples/ErrorPage";

import { Link, Route } from "react-router-dom";

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
              Error pages are often viewed by people without a background in web-development. These error pages are friendly for all web users. 
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
                      <CardBody className="text-center">
                        <div className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-desktop" />
                          </a>
                        </div>
                        <p className="card-description">
                          301
                        </p>
                      </CardBody>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i
                              aria-hidden={true}
                              className="fa fa-puzzle-piece"
                            />
                          </a>
                        </h4>
                        <p className="card-description">408</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-scissors" />
                          </a>
                        </h4>
                        <p className="card-description">401</p>
                      </CardBody>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i
                              aria-hidden={true}
                              className="fa fa-puzzle-piece"
                            />
                          </a>
                        </h4>
                        <p className="card-description">429</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-gift" />
                          </a>
                        </h4>
                        <p className="card-description">403</p>
                      </CardBody>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i
                              aria-hidden={true}
                              className="fa fa-puzzle-piece"
                            />
                          </a>
                        </h4>
                        <p className="card-description">500</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                    {/* <Route
        path='/error-page'
  render={(props) => (
    <ErrorPage code="404" text="The page you requested could not be found" />
  )}
> */}
<Link
  to={{
    pathname: "/error-page",
    state: {
      code:"404" ,text:"The page you requested could not be found" 
    },
  }}
>
                    {/* <Link to="/error-404" target="_blank" rel="noopener noreferrer"> */}
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                            <i
                              aria-hidden={true}
                              className="fa fa-puzzle-piece"
                            />
                          {/* </a> */}
                        </h4>
                        <p className="card-description">404</p>
                      </CardBody>
                      </Link>
                    </Card>
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i
                              aria-hidden={true}
                              className="fa fa-puzzle-piece"
                            />
                          </a>
                        </h4>
                        <p className="card-description">503</p>
                      </CardBody>
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
