import { Card } from "react-bootstrap";

export function Footer() {
  return (
    <Card  className="bg-danger"
      style={{
        bottom: "0",
        backgroundColor: "grey",
        padding: "6rem",
        textAlign: "center",
        fontFamily: "Arial",
        height:'1rem',
        border:"2px spolid black"
      }}  

    >     
     <h1 style={{fontSize:"80px" ,padding:".1rem",height:"2rem"}}>The Generse</h1>

      <Card.Img
        className="rounded-circle"
        src="./image/spoty.png"
        variant="center"
        style={{ height: "100px", width: "100px", textAlign: "center"  ,backgroundColor:'grey' }}
      ></Card.Img>
      <a href="https://open.spotify.com">
        {" "}
        <h1 style={{ color: "green", textAlign: "left" }}>Spotify</h1>
      </a>

      <Card.Img
        className="rounded-circle"
        src="./image/youtube.png"
        variant="left"
        style={{ height: "100px", width: "100px", textAlign: "center" ,backgroundColor:'grey' }}
      ></Card.Img>
      <a href="https://www.youtube.com">
        <h1 style={{ color: "red", textAlign: "left" }}>Youtube</h1>
      </a>
    </Card>
  );
}
