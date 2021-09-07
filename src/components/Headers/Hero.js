/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

function Hero() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark test"
          style={{
            backgroundImage: "url(" + require("assets/img/city.png") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1
                  className="presentation-title test"
                  style={{ fontSize: "5em", color: "white" }}
                >
                  Turn the negative into a positive picture
                </h1>
                <div style={{ height: "40px" }}></div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
