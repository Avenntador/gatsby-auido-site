import React, { SetStateAction } from "react";
import styled, { css } from "styled-components";

interface CounterStyleProps {
  readonly variant: any;
}

interface CounterComponentProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  variant: any;
}

const sharedStyle = css`
  display: inline-block;
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

const CounterBase = styled.span<CounterStyleProps>`
  ${sharedStyle}
  ${(props) => props.variant};
`;

export const defaultCounter = css`
  width: 12rem;
  height: 4.8rem;
`;

export const cartCounter = css`
  width: 9.6rem;
  height: 3.2rem;
`;

const Counter: React.FC<CounterComponentProps> = ({
  count,
  increment,
  decrement,
  variant,
}) => {
  return (
    <CounterBase variant={variant}>
      <span className="sign" onClick={decrement}>
        -
      </span>
      <span className="count">{count}</span>
      <span className="sign" onClick={increment}>
        +
      </span>
    </CounterBase>
  );
};

export default Counter;
