import React from "react";
import { Container, Row, Card, CardGroup, Button } from "react-bootstrap";

const wrapper = {
  width: "100%",
  height: "93vh",
};

const Home = () => {
  return (
    <div style={wrapper}>
      <Container>
        <Row>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8"
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
                src="https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk"
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

export default Home;
