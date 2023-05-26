import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//  import  { useEffect } from "react";

export function Contact() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Container
      style={{
        padding: "4rem",
        backgroundColor: "#24a798",
        margin: "5rem",
        border: "2px solid black",
        display: "flex",
        maxWidth: "600px",
      }}
    >
      <Form>
        <Form.Group className="sm-1" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            value={isAuthenticated ? user.name : ""}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={isAuthenticated ? user.email : ""}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicname">
          <Form.Label>mobileNumber Number</Form.Label>
          <Form.Control
            type="mobileNumber"
            placeholder="Enter mobile Number"
            value={isAuthenticated ? user.number : ""}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
      </Form>
    </Container>
  );
}
