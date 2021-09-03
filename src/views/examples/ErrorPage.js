import React, { useEffect } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
import { useLocation } from "react-router-dom";
// core components
import SimpleNav from "components/Navbars/SimpleNav.js";
import { isFirefox, isSafari } from "react-device-detect";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const doesNavWork = () => {
    if (isFirefox) return false;
    if (isSafari) return false;
    return true;
  };

  const location = useLocation();
  console.log("location.state", location.state);
  return (
    <>
      {doesNavWork ? <SimpleNav white /> : null}
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
              {location.state && location.state.code
                ? location.state.code
                : "YIKES"}
            </h1>
            <br />
            <p
              class="error-msg-akb"
              style={{ color: "white", fontSize: "20px" }}
            >
              {location.state && location.state.text
                ? location.state.text
                : "An error loading the error? Oh the irony!"}
            </p>
            {location.state && location.state.link ? (
              <div>
                <br />
                <a
                  href={location.state.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>Learn more here.</p>
                </a>
              </div>
            ) : null}
          </Row>

          {/* <Row >
            <a href="http://en.wikipedia.org/wiki/Special:Random" rel="noopener noreferrer">
            <h4>
            Sorry this didn't work out. Make the most of it and learn something new today.
            </h4>
            </a>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default ErrorPage;
