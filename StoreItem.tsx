import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "./utilities/FormatCurrency";
import { useShoppingCart } from "./Context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import Swal from "sweetalert2";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const Alert =()=>{
    Swal.fire('Thanks for Purchase!!')
  }
  return (
    <Card className="h-0">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{objectFit: "500px" }}
      />
      <Card.Body className=" flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>{" "}
        <div className="mt-auto" >
          {" "}
          {quantity === 0 ? (               

            <Button className="w-50"   onClick={() => increaseCartQuantity(id)}>
              {" "}
              +Add to Cart
                   
            </Button>
      
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center flex-column  justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => increaseCartQuantity(id)}
                ><h1 className='display-4' >+</h1>
              
                </Button>


      <div></div>



                <span className="f-3 display-8 bg-secondary">{quantity}</span>
                <h1 className='display-4'>Cart</h1> 
                </div>
                <Button  onClick={() => decreaseCartQuantity(id)} ><h1 className='display-4'>-</h1></Button>
                <div>



                
              </div>
              <Button onClick={() =>removeFromCart(id)} variant="success"
                size="sm"
              > <h1 className='display-6 '>Remove</h1>
                
              </Button>


            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
