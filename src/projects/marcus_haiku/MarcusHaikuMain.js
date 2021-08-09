import React, { useState, useEffect } from "react";
import {emptyHaiku,lineGenerator} from './haikuConstants'
import { Button,  Container} from "reactstrap";
import SimpleNav from "components/Navbars/SimpleNav.js";
import './styles.css';

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
  const containerHeights ={small:'10px', medium:'20px', large:'50px'}

  return (
    <>   
    <Container className="marcus-container" >
    
    <SimpleNav />
    <div style={{height: containerHeights.large}}/>

      <div 
      class="marcus-quote-box"
      >
              <blockquote className="blockquote">
                <p className="mb-0">
                 {haiku.lineOne}
                 <br/>
                  {haiku.lineTwo}
                  <br/>
                  {haiku.lineThree}
                 
                </p>
                <div style={{height: containerHeights.small}}/>
                <footer className="blockquote-footer">
                  Random Marcus Aurelius haiku generator
                </footer>
              </blockquote>
            </div>
   
            <div style={{height: containerHeights.small}}/>
            <Button onClick={haikuGenerator} class="btn-round mr-1 btn btn-outline-default" type="button" align-self="center">
         Generate new haiku
       </Button>
 
      

    </Container>
</>
  );
};

export default MarcusHaikuMain;
