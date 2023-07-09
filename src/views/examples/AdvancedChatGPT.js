import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import SimpleNav from "components/Navbars/SimpleNav.js";
import { constants } from "data/constants";
import { doesNavWork } from "utils";
import { containerHeights } from "data/stylingConstants";

function AdvancedChatGPT() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      {doesNavWork() ? <SimpleNav white /> : null}
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/soroush-karimi.jpg") + ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-mobile" />
                  </div>
                  <div className="description">
                    <h4>
                      After taking Andrew Ng's{" "}
                      <a
                        href={constants.promptEngineeringCourseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        course
                      </a>
                      in prompt engineering, I understood the power of ChatGPT
                      and how with some extra consideration upfront, you could
                      generate responses that were closer to your final output.
                      This site uses the ChatGPT API and includes UI to help
                      generate prompts that will result in more relevant
                      responses.
                    </h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <div className="details-text"> </div>

                <a
                  href="https://apps.apple.com/app/id1501776587"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="card-image">
                    <img
                      alt="Two octopi pair programming"
                      src={require("assets/img/Pair_Programming.png")}
                    />
                    <div style={{ height: containerHeights.medium }} />
                    <img
                      alt="App store badge"
                      src={require("assets/img/app-store.jpg")}
                      style={{ alignSelf: "center" }}
                    />
                  </Card>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AdvancedChatGPT;
