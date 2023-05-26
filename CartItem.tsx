import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "./Context/ShoppingCartContext";
import storeItems from "./Data/Items.json";
import { formatCurrency } from "./utilities/FormatCurrency";
import Swal from "sweetalert2";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const Alert = () => {
    Swal.fire("Thanks for The Purchase!!");
  };
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((Items) => Items.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "425px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              Close{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        {" "}
        Remove
      </Button>
      <Button variant="outline-danger" size="sm" onClick={Alert}>
        {" "}
        Purchase
      </Button>

      <div></div>
    </Stack>
  );
}
