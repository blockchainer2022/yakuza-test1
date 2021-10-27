import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./styles.css";
import zombie from "../../resources/Zombie_Example.png";
import alien from "../../resources/Alien_Example.png";
import katana from "../../resources/Gold_Example.png";

const Team = () => {
  return (
    <div id="Team">
      <Container className="teamContainer">
        <Row>
          <Col className="teamTitle">Rare Attributes</Col>
        </Row>
        <Row>
          <Col sm="12" md="4">
            <Card className="card1">
              <Card.Img variant="top" src={zombie} className="cardPhoto" />
              <Card.Body>
                <Card.Title>Zombie</Card.Title>
                <Card.Text>
                  You have a 1% chance of your Yakuza Member being a zombie.
                  Killed by a rival gang, these restless souls have returned to
                  life seeking revenge.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card className="card1">
              <Card.Img variant="top" src={alien} className="cardPhoto" />
              <Card.Body>
                <Card.Title>Alien </Card.Title>
                <Card.Text>
                  0.5% of Yakuza Street Gang members are Aliens. How did
                  intergalactic beings get mixed up in a street gang? The answer
                  will be revealed in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card className="card1">
              <Card.Img variant="top" src={katana} className="cardPhoto" />
              <Card.Body>
                <Card.Title>Gold Items </Card.Title>
                <Card.Text>
                  You have a 1% chance of your Yakuza Member rolling each gold
                  item. These status symbols show wealth and identify you as an
                  "Oyabun", meaning "syndicate head" or "family boss".
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
