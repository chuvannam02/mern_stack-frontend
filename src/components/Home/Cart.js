import "./cart.scss";
import Total from "../Items/Total";
import CartItems from "../Items/CartItems";
import { useSelector } from "react-redux";
import React from "react";
function Cart() {
  const cart = useSelector((state) => state.carts?.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItems
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
