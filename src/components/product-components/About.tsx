import React, { useRef, useState } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  TypographyBody,
  TypographyH2,
  TypographyOverline,
} from "../typography";
import Counter, { defaultCounter } from "../Counter";
import ModalCart from "../Cart/ModalCart";
import  ActionButton  from "../Buttons/ActionButton";
import { mainButton } from "../Buttons/buttonStyle";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addToCart, CartItem } from "../../store/cartSlice";

type AboutPropsType = {
  about: {
    productId: string;
    isProductNew: boolean;
    productPrice: number;
    productTitle: string;
    productImage: any;
    productDesc: string;
    productCartImg: any;
    productCartTitle: string;
  };
};

const AboutProductWrapper = styled.div`
  height: 56rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .product-new {
    color: var(--color-orange-primary);
    margin-bottom: 1.6rem;
    opacity: 1;
  }
  .product-title {
    margin-bottom: 3.2rem;
  }
  .product-desc {
    max-width: 44.5rem;
  }
  .product-descText {
    max-width: 44.5rem;
    margin-bottom: 3.2rem;
  }
  .product-price {
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-family: var(--font-family-bold);
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    margin-bottom: 4.7rem;
  }
  .product-img {
    max-width: 54rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  .product-desc-actions {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
`;

const About = ({ about }: AboutPropsType) => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  const modalRef = useRef();

  let productForCart: CartItem = {
    id: about.productId,
    title: about.productCartTitle,
    price: about.productPrice,
    count,
    image: about.productImage,
  };

  const addToCartHandler = () => {
    dispatch(addToCart(productForCart));
    modalRef.current!.openModal();
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count !== 1) setCount((prevCount) => prevCount - 1);
  };

  return (
    <AboutProductWrapper>
      <div className="product-img">
        <GatsbyImage image={about.productImage!} alt="product-img" />
      </div>
      <div className="product-desc">
        {about.isProductNew ? (
          <TypographyOverline className="product-new">
            New product
          </TypographyOverline>
        ) : null}

        <div className="product-title">
          <TypographyH2> {about.productTitle}</TypographyH2>
        </div>
        <div className="product-descText">
          <TypographyBody>{about.productDesc}</TypographyBody>
        </div>
        <div className="product-price">{`$ ${about.productPrice}`}</div>
        <div className="product-desc-actions">
          <Counter
            increment={increment}
            decrement={decrement}
            variant={defaultCounter}
            count={count}
          />
          <ActionButton
            onClick={addToCartHandler}
            title="ADD TO CART"
            variant={mainButton}
          />
          <ModalCart ref={modalRef} />
        </div>
      </div>
    </AboutProductWrapper>
  );
};

export default About;
