import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const Update = () => {
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/200/300" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Update;
