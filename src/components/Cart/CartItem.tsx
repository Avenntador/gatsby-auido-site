import React from "react";
import Counter, { cartCounter } from "../Counter";
import { GatsbyImage } from "gatsby-plugin-image";
import { incrementQuantity, decrementQuantity } from "../../store/cartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { TypographyBody } from "../typography";
import styled from "styled-components";

interface CartItemType {
  cartItemData: {
    id: string;
    price: number;
    title: string;
    image: any;
    count: number;
  };
}

const CartItemWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0.8rem;
  }

  .cart-info {
    display: flex;

    .cart-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1.6rem;

      .cart-desc-title {
        font-family: var(--font-family-bold);
        opacity: 1;
      }
    }
  }
`;

const CartItem: React.FC<CartItemType> = ({ cartItemData }) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementQuantity(cartItemData.id));
  };

  const decrement = () => {
    dispatch(decrementQuantity(cartItemData.id));
  };
  return (
    <CartItemWrapper key={cartItemData.id} className="cart-item">
      <div className="cart-info">
        <div className="cart-img">
          <GatsbyImage image={cartItemData.image} alt="cart-img" />
        </div>
        <div className="cart-desc">
          <TypographyBody className="cart-desc-title">
            {cartItemData.title}
          </TypographyBody>
          <TypographyBody
            style={{ fontSize: "1.4rem" }}
            className="cart-desc-price"
          >
            $ {cartItemData.price}
          </TypographyBody>
        </div>
      </div>
      <Counter
        increment={increment}
        decrement={decrement}
        variant={cartCounter}
        count={cartItemData.count}
      />
    </CartItemWrapper>
  );
};

export default CartItem;
