import { Button, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="p-5 my-4 text-bg-secondary rounded-3 text-start">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome</h1>
        <p className="fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Button variant="dark">Get Started</Button>
      </div>
    </Container>
  );
};

export default Welcome;
