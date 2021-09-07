import React, { useState, useEffect } from "react";
import { emptyHaiku, lineGenerator } from "./haikuConstants";
import { Button, Container } from "reactstrap";
import SimpleNav from "components/Navbars/SimpleNav.js";
import "./styles.css";
import { doesNavWork } from "utils";

const MarcusHaikuMain = () => {
  const [haiku, setHaiku] = useState(emptyHaiku);
  useEffect(() => haikuGenerator(), []);

  const haikuGenerator = () => {
    let currentHaiku = emptyHaiku;
    currentHaiku.lineOne = lineGenerator(5);
    currentHaiku.lineTwo = lineGenerator(7);
    currentHaiku.lineThree = lineGenerator(5);
    setHaiku({ ...currentHaiku });
  };
  const containerHeights = { small: "10px", medium: "20px", large: "50px" };

  return (
    <>
      <Container className="marcus-container">
        {doesNavWork() ? <SimpleNav /> : null}
        <div style={{ height: containerHeights.large }} />
        <div class="marcus-quote-box">
          <blockquote className="blockquote">
            <p className="mb-0">
              {haiku.lineOne}
              <br />
              {haiku.lineTwo}
              <br />
              {haiku.lineThree}
            </p>
            <div style={{ height: containerHeights.small }} />
            <footer className="blockquote-footer">
              Random Marcus Aurelius haiku generator
            </footer>
          </blockquote>
        </div>
        <div style={{ height: containerHeights.small }} />
        <Button
          onClick={haikuGenerator}
          class="btn-round mr-1 btn btn-outline-default"
          type="button"
          align-self="center"
        >
          Generate new haiku
        </Button>
        <div style={{ height: "10vh" }} />
        <h6>How are the haikus generated?</h6>
        <p>
          Every word from Marcus Aurelius' first three books of Meditations was
          put through an algorithm to determine how many syllables the word
          contained. The lines were randomly created using the traditional haiku
          pattern of 5 syllables for the first and last line and 7 syllables for
          the second line. This is a tangent on the idea of Augmented
          Intelligence, specifically using the computer to augment the
          creativity of the human mind.
        </p>
      </Container>
    </>
  );
};

export default MarcusHaikuMain;
