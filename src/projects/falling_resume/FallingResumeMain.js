import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import FallingResume from "./FallingResume";
import SimpleNav from "components/Navbars/SimpleNav";
import { Container } from "reactstrap";
import { doesNavWork } from "utils";

const FallingResumeMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
