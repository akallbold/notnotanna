import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from 
import { meditationsBySyllable } from "./meditations";
import MainProjectViewContainer from '../MainProjectViewContainer.js'
import {syllableMapper,emptyHaiku,wordPicker,lineGenerator,randomNumberGenerator} from './haikuConstants'
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     justifyContent: "center"
//   },
//   haikuContainer: {
//     justifyContent: "center",
//     width: "100%",
//     height: "200px"
//   }
// }));



const MarcusHaikuMain = () => {

  const [haiku, setHaiku] = useState(emptyHaiku);
  useEffect(() => haikuGenerator(),[])

  const haikuGenerator = () => {
    let currentHaiku = emptyHaiku;
    currentHaiku.lineOne = lineGenerator(5);
    currentHaiku.lineTwo = lineGenerator(7);
    currentHaiku.lineThree = lineGenerator(5);
    setHaiku({ ...currentHaiku });
  };

  return (
    <Container>

    {/* <Col md="4">      */}
      <div className="typography-line">
              <blockquote className="blockquote">
                <p className="mb-0">
                 {haiku.lineOne}
                 <br/>
                  {haiku.lineTwo}
                  <br/>
                  {haiku.lineThree}
                 
                </p>
                <br />
                <footer className="blockquote-footer">
                  Random Marcus Aurelius haiku generator
                </footer>
              </blockquote>
            </div>
            <div cen>
            <Button onClick={haikuGenerator} class="btn-round mr-1 btn btn-outline-default" type="button" align-self="center">
         Generate new haiku
       </Button>
            </div>
      
    {/* </> */}
    {/* </Col> */}
    </Container>

  );
};

export default MarcusHaikuMain;
