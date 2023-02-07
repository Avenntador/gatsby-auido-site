// @ts-nocheck
import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import Portal from "../Portal";
import Cart from "./Cart";

const Wrapper = styled.div`
  /* общий задний фон для модалки */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const HelpWrapper = styled.div`
  /* для  выравнивания модалки по этому элементу т.к позиция релатив */
  position: relative;
  width: 111rem;
  height: 100vh;
  margin: 0 auto;
  z-index: 1;
`;

const ModalCart = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    };
  });

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = (e) => {
    setDisplay(false);
  };

  if (display) {
    return (
      <Portal>
        <Wrapper onClick={handleClose}>
          <HelpWrapper>
            <Cart />
          </HelpWrapper>
        </Wrapper>
      </Portal>
    );
  }

  return null;
});

export default ModalCart;
