import React from "react";
import { animated, useTrail } from "react-spring";
import "./styles.scss";

const FallingResume = () => {
  const TRAIL_LENGTH = 25;
  const svgList = [
    require("assets/img/falling-resume-images/ct.png"),
    require("assets/img/falling-resume-images/nyc.png"),
    require("assets/img/falling-resume-images/ca.png"),
    require("assets/img/falling-resume-images/tennis.png"),
    require("assets/img/falling-resume-images/bulldog.png"),
    require("assets/img/uconn.png"),
    require("assets/img/falling-resume-images/3b1b.png"),
    require("assets/img/falling-resume-images/audi.png"),
    require("assets/img/falling-resume-images/cessna.png"),
    require("assets/img/falling-resume-images/coding-cat.png"),
    require("assets/img/falling-resume-images/daft-punk.png"),
    require("assets/img/falling-resume-images/evernote.png"),
    require("assets/img/falling-resume-images/casio.png"),
    require("assets/img/falling-resume-images/fender.png"),
    require("assets/img/falling-resume-images/germany.png"),
    require("assets/img/falling-resume-images/golf.png"),
    require("assets/img/falling-resume-images/hydro-homie.png"),
    require("assets/img/falling-resume-images/jimi.png"),
    require("assets/img/falling-resume-images/plant.png"),
    require("assets/img/falling-resume-images/pride2.png"),
    require("assets/img/falling-resume-images/sweden.png"),
    require("assets/img/falling-resume-images/usa.png"),
  ];
  const svgArray = Array.from(
    { length: TRAIL_LENGTH },
    (_, i) => svgList[i % svgList.length]
  );
  let height = 50;
  let width = 50;
  if (window) {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  const [trail] = useTrail(TRAIL_LENGTH, () => ({
    config: { mass: 20, tension: 280, friction: 320 },
    from: { top: -600, opacity: 1 },
    to: { top: height + 20, opacity: 0.0 },
  }));

  return (
    <>
      {trail.map((style, i) => {
        const size = Math.floor(30 + Math.random() * 200);
        const svgPosition = 10 + Math.floor(Math.random() * width * 0.9);
        const key = `${size}-${svgPosition}`;
        return (
          <div
            style={{
              left: svgPosition,
              position: "absolute",
              height: "100vw",
            }}
            key={key}
          >
            <animated.div
              style={style}
              left={svgPosition}
              key={key}
              className="animated-div"
            >
              <img src={svgArray[i]} width={size} stroke={"blue"} alt="x" />
            </animated.div>
          </div>
        );
      })}
    </>
  );
};

export default FallingResume;
