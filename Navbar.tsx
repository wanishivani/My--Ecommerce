import { NavLink } from "react-router-dom/dist";
import { useAuth0 } from "@auth0/auth0-react";

import { Container, Button, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { useShoppingCart } from "./Context/ShoppingCartContext";
export function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbarbs
      sticky="top"
      className="d-flex flex-column bd-highlight mb-50 mw-100  text-white"
      style={{
        margin: ".3rem",
        padding: "5px",
        height: "120px",
        backgroundColor: "aqua",
      }}
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/about " as={NavLink}>
            <h1 className="display-4 "> About</h1> <br></br>
          </Nav.Link>
        </Nav>
        {isAuthenticated ? (
          <>
            <Nav>
              <Nav.Link to="/store" as={NavLink}>
                <h1
                  className="d-flex flex-column bd-highlight mb-50 mw-100  text-white me-auto"
                  style={{
                    textAlign: "left",
                    padding: "",
                    margin: "",
                    backgroundColor: "pink",
                    borderRadius: "12px",
                  }}
                >
                  {""}
                  Store
                </h1>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                <h1
                  className="d-flex flex-column bd-highlight mb-50 mw-100 me-auto text-white gap{5}"
                  style={{
                    textAlign: "left",
                    padding: "",
                    margin: "",
                    backgroundColor: "red",
                    borderRadius: "12px",
                  }}
                >
                  Home
                </h1>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/contact " as={NavLink}>
                <h1
                  className="d-flex flex-column bd-highlight mb-50 mw-100  me-auto text-dark"
                  style={{
                    textAlign: "left",
                    padding: "",
                    margin: "",
                    backgroundColor: "yellow",
                    borderRadius: "12px",
                  }}
                >
                  Contact us
                </h1>
              </Nav.Link>
            </Nav>
            <li
              style={{ backgroundColor: "", textAlign: "justify", margin: "" }}
            >
              <Button
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button
                style={{
                  width: "100px",
                  borderRedious: "12px",
                  position: "revert",
                  textAlign: "center",
                }}
                onClick={() => loginWithRedirect()}
              > Log In
              </Button>
            </li>
          </>
        )}
        {isAuthenticated && <h5>{user.name}</h5>}

        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{
              width: "6rem ",
              height: "5rem",
              position: "realtive",
              color: "green",
            }}
            variant="outline-secondary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <div
              className="rounded-circle, bg-danger d-flex justfy-content-center align-items-right"
              style={{
                color: "white",
                width: "1.1rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                transform: "translate(25% , 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </Navbarbs>
  );
}
