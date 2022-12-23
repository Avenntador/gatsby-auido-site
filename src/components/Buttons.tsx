import React from "react";
import styled, { css } from "styled-components";
import rightArrow from "../assets/icons/icon-arrow-right.svg";

const sharedStyle = css`
  width: 16rem;
  height: 4.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;

const StyledColoredButton = styled.button`
  ${sharedStyle}
  line-height: 2.5rem;
  color: var(--color-white);
  background-color: var(--color-orange-primary);
  font-family: var(--font-family-bold);
  border: none;

  &:hover {
    background-color: var(--color-orange-secondary);
  }
`;

const StyledUncoloredButton = styled.button`
  ${sharedStyle}
  line-height: 2.5rem;
  color: var(--color-black-primary);
  background-color: var(--color-white);
  font-family: var(--font-family-bold);
  border: 1px solid var(--color-black-primary);

  &:hover {
    background-color: var(--color-black-primary);
    color: var(--color-white);
  }
`;

const StyledNavButton = styled.button`
  ${sharedStyle}
  line-height: 1.8rem;
  opacity: 0.5;
  font-family: var(--font-family-bold);
  color: var(--color-black-primary);
  border: none;
  outline: none;
  background-color: transparent;
  width: inherit;
  height: auto;

  &:hover {
    color: var(--color-orange-primary);
    opacity: 1;
  }
`;

const ColoredButton = ({ title }: { title: String }) => {
  return <StyledColoredButton>{title}</StyledColoredButton>;
};

const UncoloredButton = ({ title }: { title: String }) => {
  return <StyledUncoloredButton>{title}</StyledUncoloredButton>;
};

const NavButton = () => {
  return (
    <StyledNavButton>
      shop&nbsp;
      <img src={rightArrow} alt="" />
    </StyledNavButton>
  );
};

export { ColoredButton, UncoloredButton, NavButton };
