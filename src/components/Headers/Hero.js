/*eslint-disable*/
import React, { useEffect, useState, useRef } from "react";
import { Container } from "reactstrap";
import BIRDS from "vanta/dist/vanta.birds.min";

function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);

  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xc3acac,
          color1: 0x92931,
          color2: 0xcacfd2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="wrapper">
        <div
          id="landing-background"
          className="page-header section-dark"
          ref={myRef}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1
                  style={{ fontSize: "5em", color: "grey", fontWeight: "bold" }}
                >
                  Welcome to my site
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
