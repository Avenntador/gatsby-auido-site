import React from "react";
import styled from "styled-components";

const StyledCounter = styled.span`
  display: inline-block;
  width: 12rem;
  height: 4.8rem;
  background-color: var(--color-gray-primary);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .sign,
  .count {
    font-size: 1.3rem;
    font-family: var(--font-family-bold);
    letter-spacing: 0.1rem;
    line-height: 1.8rem;
  }

  .sign {
    opacity: 0.25;
    cursor: pointer;

    &:hover {
      color: var(--color-orange-primary);
    }
  }
`;

const Counter = ({ count }: { count: number }) => {
  return (
    <StyledCounter>
      <span className="sign">-</span>
      <span className="count">{count}</span>
      <span className="sign">+</span>
    </StyledCounter>
  );
};

export default Counter;
