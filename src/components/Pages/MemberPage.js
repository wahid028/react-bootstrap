import React from "react";
import { Container, Row, Card, CardGroup, Button } from "react-bootstrap";

const Member = () => {
  return (
    <div>
      <Container>
        <Row>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button> Read More </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button> Read More </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button> Read More </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Member;
