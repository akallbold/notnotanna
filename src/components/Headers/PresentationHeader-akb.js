/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function AKBPresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title"> 
               Welcome to my site</h1>
                <div style={{height:"40px"}}></div>
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
              </div>
              {/* <h2 className="presentation-subtitle text-center">
              Testing to see if this updated!
              </h2> */}
            </Container>
          </div>
    
        </div>
      </div>
    </>
  );
}

export default AKBPresentationHeader;
