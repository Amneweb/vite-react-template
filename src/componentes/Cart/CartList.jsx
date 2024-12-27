import { useContext } from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const CartList = ({ remover }) => {
  const { carrito } = useContext(CartContext);
  return (
    <>
      {carrito.map((item) => (
        <>
          <CartItem key={item.item.sku} item={item} remover={remover} />
          <Divider />
        </>
      ))}
    </>
  );
};

export default CartList;
