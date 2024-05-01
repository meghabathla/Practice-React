import React from "react";
import { useCart } from "../context/useCart";

export const Cart = () => {
  const { cart, setCart } = useCart();
  console.log(cart);
  const total = cart
    ? cart.reduce((acc, cur) => {
        return acc + parseInt(cur.price);
      }, 0)
    : 0;
  console.log(total);

  return (
    <div>
      <h3>Cart</h3>
      <div className="max-w-52 h-auto border border-black flex flex-col rounded-md p-4 m-2">
        {cart.map((product) => (
          <div key={product.key}>
            <div>Name: {product.productName}</div>
            <div>Price: {product.price}</div>
          </div>
        ))}
        <div>Total bill: {total}</div>
      </div>
    </div>
  );
};
