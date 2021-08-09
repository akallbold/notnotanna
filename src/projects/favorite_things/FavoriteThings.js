import React, { useState} from "react";
import {favoriteThings} from './data'
import { Button,  Container} from "reactstrap";
import SimpleNav from "components/Navbars/SimpleNav.js";
import './styles.css';

const FavoriteThings = () => {
  const [cleanThings, setCleanThings] = useState([...favoriteThings])
  const generateRandomIndex=()=> Math.floor(Math.random()*100) % cleanThings.length
  const [thing, setThing] = useState(cleanThings[generateRandomIndex()]);

  const selectThing=()=>{
    if(cleanThings.length === 0) setCleanThings([...favoriteThings])
      let randomIndex = generateRandomIndex() 
      let nextThing = cleanThings[randomIndex] || "...that's the end of the list, starting from the top again..."
      setThing(nextThing)
      cleanThings.splice(randomIndex,1)
  }

  const containerHeights ={small:'10px', medium:'20px', large:'50px'}
  return (
    <>   
    <Container className="marcus-container" >
    <SimpleNav />
    <div style={{height: containerHeights.large}}/>
      <div 
      className="marcus-quote-box"
      >
              <blockquote className="blockquote">
                <div style={{height: containerHeights.medium}}/>
                <p className="mb-0">
                 {thing}
                </p>
                 <div style={{height: containerHeights.medium}}/>
              </blockquote>
            </div>
   
            <div style={{height: containerHeights.small}}/>
            <Button onClick={()=>  selectThing()} 
            className="btn-round mr-1 btn btn-outline-default" type="button" align-self="center">
         Tell me another thing
       </Button>
 
      

    </Container>
</>
  );
};

export default FavoriteThings;
