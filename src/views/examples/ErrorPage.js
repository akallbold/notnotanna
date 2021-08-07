import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import {useLocation} from 'react-router-dom'
// core components
import SimpleNav from "components/Navbars/SimpleNav.js";

function ErrorPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-404");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-404");
    };
  });

  const location = useLocation()  

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
        <div className="filter" />
        <Container>
          <Row>
            <h1 class="title">
             {location.state && location.state.code.code ? location.state.code : "YIKES"}
              <br />
              <p class="error-msg">{location.state && location.state.text ? location.state.text : "An error loading the error? Oh the irony!"}</p>
            </h1>
          </Row>
        
        </Container>
      </div>
    </>
  );
}

export default ErrorPage;
