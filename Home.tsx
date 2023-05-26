import { Col, Row } from "react-bootstrap";
export function Home() {
  return (
    <div>
      <h1 style={{ textAlign:"-moz-initial",padding:'',fontSize:'80px',fontFamily:"Arial"}}
        
      >Tour
      </h1>
      <div
        className="d-flex flex-column bd-highlight mb-3  d-flex justfy-content-center mw-40"
        style={{ padding: "15px", margin: "4rem", height: "1140px" ,textAlign:"center" ,maxWidth:"800px"}}
      >
        <Row
          style={{
            padding: "90px",
            margin: "",
            height: "60px",
            border: "5px solid black",
            backgroundColor: "grey",
            textAlign:"center",maxWidth:"1000px"
          }}
        >
          <Col style={{ paddingInline: "2px", backgroundColor: "orange",textAlign:"center" }}>
            <h1>Year</h1>
          </Col>
          <Col style={{ backgroundColor: "yellow" ,textAlign:"center"}}>
            <h1>Name</h1>
          </Col>
          <Col style={{ backgroundColor: "powderblue" ,textAlign:"center"}}>
            <h1> Concert</h1>
          </Col>
          <Col style={{ backgroundColor: "pink" ,textAlign:"center"}}>
            <h1>Ticket</h1>
          </Col>
        </Row>
        <Row
          style={{
            padding: "40px",
            height: "220px",
            border: "5px solid black",
            backgroundColor: "green",textAlign:"center"
          }}
        >
          <Col style={{ padding: "20px", backgroundColor: "orange" ,textAlign:"center"}}>
            JUL16
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "yellow",textAlign:"center" }}>
            DETROIT, MI
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "powderblue" ,textAlign:"center"}}>
            DTE ENERGY MUSIC THEATRE
          </Col>
          <Col>
            {" "}
            <h1
              style={{
                padding: "8px",
                border: "4px solid red",
                margin: "6px",
                backgroundColor: "pink",textAlign:"center"
              }}
            >
              BUY TICKETS
            </h1>
          </Col>
        </Row>
        <Row
          style={{
            padding: "40px",
            height: "220px",
            border: "5px solid black",
            backgroundColor: "green",textAlign:"center"
          }}
        >
          <Col style={{ padding: "20px", backgroundColor: "orange",textAlign:"center" }}>
            JUL16
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "yellow",textAlign:"center" }}>
            DETROIT, MI
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "powderblue" ,textAlign:"center"}}>
            DTE ENERGY MUSIC THEATRE
          </Col>
          <Col>
            <h1
              style={{
                padding: "8px",
                border: "4px solid red",
                margin: "6px",
                backgroundColor: "pink",textAlign:"center"
              }}
            >
              BUY TICKETS
            </h1>
          </Col>
        </Row>
        <Row
          style={{
            padding: "40px",
            height: "220px",
            border: "5px solid black",
            backgroundColor: "green",textAlign:"center"
          }}
        >
          <Col style={{ padding: "20px", backgroundColor: "orange" ,textAlign:"center"}}>
            JUL16
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "yellow" ,textAlign:"center"}}>
            DETROIT, MI
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "powderblue" }}>
            DTE ENERGY MUSIC THEATRE
          </Col>
          <Col>
            <h1
              style={{
                padding: "8px",
                border: "4px solid red",
                margin: "6px",
                backgroundColor: "pink",textAlign:"center"
              }}
            >
              BUY TICKETS
            </h1>
          </Col>
        </Row>

        <Row
          style={{
            padding: "40px",
            height: "220px",
            border: "5px solid black",
            backgroundColor: "green",textAlign:"center"
          }}
        >
          <Col style={{ padding: "20px", backgroundColor: "orange" ,textAlign:"center"}}>
            JUL16
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "yellow" ,textAlign:"center"}}>
            DETROIT, MI
          </Col>
          <Col style={{ padding: "20px", backgroundColor: "powderblue",textAlign:"center" }}>
            DTE ENERGY MUSIC THEATRE
          </Col>
          <Col>
            <h1
              style={{
                padding: "8px",
                border: "4px solid red",
                margin: "6px",
                backgroundColor: "pink",textAlign:"center"
              }}
            >
              BUY TICKETS
            </h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}
//     <>
//       <div style={{ height: "800px", width: "1800px" }}>
//         <Container
//           className="mw-800 mh-800  "
//           style={{ padding: "2rem", height: "140px" }}
//         >
//           <div className="d-flex flex-column bd-highlight mb-3 mw-800 bg-danger text-white mh-600 h-800 d-flex justfy-content-center">
//             {" "}
//             <h1 className="display-1"> Tour</h1>
//           </div>
//           <div
//             className="d-flex flex-column bd-highlight mb-3  mh-200 h-200  d-flex justfy-content-center"
//             style={{ padding: "8px", margin: "", height: "540px" }}
//           >
//             <Row>
//               <Col>year</Col>
//               <Col>Name</Col>
//               <Col>Concert</Col>
//               <Col>Handle</Col>
//             </Row>

//             <Row>
//               <Col>year</Col>
//               <Col>Name</Col>
//               <Col>Concert</Col>
//               <Col>Handle</Col>
//             </Row>
//             <Row>
//               <Col>year</Col>
//               <Col>Name</Col>
//               <Col>Concert</Col>
//               <Col>Handle</Col>
//             </Row>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// }
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';

// const popover = (
//   <Popover id="popover-basic">
//     <Popover.Header as="h3">Popover right</Popover.Header>
//     <Popover.Body>
//       And here's some <strong>amazing</strong> content. It's very engaging.
//       right?
//     </Popover.Body>
//   </Popover>
// );

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// );
// export default popover;
