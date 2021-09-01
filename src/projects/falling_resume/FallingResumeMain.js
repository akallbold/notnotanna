import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import FallingResume from "./FallingResume";
import SimpleNav from "components/Navbars/SimpleNav";
import { Container } from "reactstrap";
import { isFirefox, isSafari } from "react-device-detect";

const FallingResumeMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const doesNavWork = () => {
    if (isFirefox) return false;
    if (isSafari) return false;
    return true;
  };

  return (
    <>
      {doesNavWork() ? <SimpleNav /> : null}
      <Container className="main-div-for-falling-resume">
        {/* <div className="main-div"> */}
        <FallingResume />
        {/* </div> */}
      </Container>
    </>
  );
};

export default FallingResumeMain;
