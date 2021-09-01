import React from "react";
import { animated, useTrail } from "react-spring";
import "./styles.scss";

const FallingResume = () => {
  const TRAIL_LENGTH = 25;
  const svgList = [
    require("assets/img/ct.png"),
    require("assets/img/nyc.png"),
    require("assets/img/ca.png"),
    require("assets/img/tennis.png"),
    require("assets/img/bulldog.png"),
    require("assets/img/uconn.png"),
    require("assets/img/3b1b.png"),
    require("assets/img/audi.png"),
    require("assets/img/cessna.png"),
    require("assets/img/coding-cat.png"),
    require("assets/img/daft-punk.png"),
    require("assets/img/evernote.png"),
    require("assets/img/casio.png"),
    require("assets/img/fender.png"),
    require("assets/img/germany.png"),
    require("assets/img/golf.png"),
    require("assets/img/hydro-homie.png"),
    require("assets/img/jimi.png"),
    require("assets/img/plant.png"),
    require("assets/img/pride2.png"),
    require("assets/img/sweden.png"),
    require("assets/img/usa.png"),
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
