import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-start">Category Fantasy</h1>
        <Row>
          {fantasy.map((book) => {
            return (
              <Col sm={12} md={6} lg={3} className="d-flex justify-content-center">
                <Card className="text-bg-secondary m-2">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      aspectRatio: "1/1.5"
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Button variant="dark">Buy</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
