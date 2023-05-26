import { Container, Navbar as Navbarbs, Col, Row } from "react-bootstrap";
export function Header() {
  return (
    <>
      <Container
        
        style={{ padding: ".1rem", height: "140px", maxWidth:'130rem' }}>
        <Navbarbs className=" flex-column bd-highlight mb-3  bg-secondary text-white mh-300  mh-1800" style={{ padding: "10px", height: "140px" }}
>
          <h1 className="display-1">The Generics</h1>
        </Navbarbs>



      </Container>
    </>
  );
}
