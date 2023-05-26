import { Col, Row } from "react-bootstrap"
import storeItems from "../Data/Items.json"
import { StoreItem } from "../StoreItem"
export function Store() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Store</h1>
      <Row md={1} sm={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
        }