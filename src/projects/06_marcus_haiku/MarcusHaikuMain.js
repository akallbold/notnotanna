import React, { useState, useEffect } from "react";
import {emptyHaiku,lineGenerator} from './haikuConstants'
import { Button,  Container} from "reactstrap";

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
      

    </Container>

  );
};

export default MarcusHaikuMain;
