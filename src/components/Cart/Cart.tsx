import React, { useRef } from "react";
import styled from "styled-components";
import { TypographyBody, TypographyH6 } from "../typography";
import ActionButton from "../Buttons/ActionButton";
import { mainButton } from "../Buttons/buttonStyle";
import { selectCart, removeAllItems } from "../../store/cartSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import CartItem from "./CartItem";
import { navigate } from "gatsby";

const CartWrapper = styled.div`
  position: absolute;
  width: 37.7rem;
  background-color: #ffffff;
  border-radius: 0.8rem;
  z-index: 2000;
  padding: 3.3rem;

  .cart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.2rem;

    .cart-remove {
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: #000000;
      opacity: 0.5;
    }
  }
  .cart-items > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  .cart-total {
    display: flex;
    justify-content: space-between;
    margin: 3.2rem 0 2.4rem 0;
  }

  @media (min-width: 1150px) {
    top: 9%;
    right: 0;
  }

  @media (min-width: 1200px) {
    top: 9%;
    right: 0;
  }

  @media (min-width: 1440px) {
    top: 9%;
    right: 0;
  }
`;

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(selectCart);

  const cartItems = Object.keys(cart).length;

  let total = 0;
  Object.keys(cart).forEach(
    (item) => (total += cart[item]["price"] * cart[item]["count"])
  );

  const removeAllHandler = () => {
    dispatch(removeAllItems());
  };

  return (
    <CartWrapper onClick={(e) => e.stopPropagation()}>
      <>
        <div className="cart-header">
          <TypographyH6>{`Cart (${cartItems})`}</TypographyH6>
          <button onClick={removeAllHandler} className="cart-remove">
            Remove all
          </button>
        </div>
        <div className="cart-items">
          {Object.keys(cart).map((item) => {
            const cartItemData = {
              id: cart[item]["id"],
              price: cart[item]["price"],
              title: cart[item]["title"],
              image: cart[item]["image"],
              count: cart[item]["count"],
            };

            return <CartItem cartItemData={cartItemData} />;
          })}
        </div>

        <div className="cart-total">
          <TypographyBody>TOTAL</TypographyBody>
          <TypographyH6>$ {total}</TypographyH6>
        </div>
        <ActionButton
          onClick={() => {
            navigate("/checkout");
          }}
          title="CHECKOUT"
          variant={mainButton}
          style={{ width: "100%" }}
          disabled={cartItems === 0}
        />
      </>
    </CartWrapper>
  );
};

export default Cart;
