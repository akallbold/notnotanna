import React from "react";
import { Container, Row, Col } from "reactstrap";
import { LiveWire, Haikus, StickerApp } from "data/funStuffData";
import FunStuffCard from "./FunStuffCard";

function FunStuffSection() {
  return (
    <>
      <div
        className="section section-examples section-white"
        id="examples project-section"
      >
        <Container>
          <Row>
            <div className="title text-center">
              <h2 className="title">Fun Stuff!</h2>
              <h5 className="description">
                Here are some projects I've worked on. They stem from wanting to
                learn new technologies for work to pure whimsy. Enjoy!
              </h5>
            </div>
          </Row>
          <Row>
            <Col md="4">
              {/* <FunStuffCard data={TheHundredYears} />
              <FunStuffCard data={ErrorPages} /> */}
              <FunStuffCard data={LiveWire} />
              {/* <FunStuffCard data={FallingResume} /> */}
            </Col>

            <Col md="4">
              <FunStuffCard data={Haikus} />
            </Col>
            <Col md="4">
              <FunStuffCard data={StickerApp} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FunStuffSection;
