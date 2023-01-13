import React from "react";
import styled, { css } from "styled-components";
import rightArrow from "../assets/icons/icon-arrow-right.svg";
import { Link, navigate } from "gatsby";

interface ButtonProps {
  readonly variant: any;
}

// ---------------------------------
const sharedStyle = css`
  width: 16rem;
  height: 4.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;
export const mainButton = css`
  line-height: 2.5rem;
  background-color: var(--color-orange-primary);
  color: var(--color-white);
  font-family: var(--font-family-bold);
  border: none;

  &:hover {
    background-color: var(--color-orange-secondary);
  }
`;
export const secondaryButton = css`
  line-height: 2.5rem;
  background-color: var(--color-white);
  color: var(--color-black-primary);
  font-family: var(--font-family-bold);
  border: 1px solid var(--color-black-primary);

  &:hover {
    background-color: var(--color-black-primary);
    color: var(--color-white);
  }
`;
export const tertiaryButton = css`
  line-height: 2.5rem;
  background-color: transparent;
  color: var(--color-black-primary);
  font-family: var(--font-family-bold);
  border: 1px solid var(--color-black-primary);

  &:hover {
    background-color: var(--color-black-primary);
    color: var(--color-white);
  }
`;
export const quartiaryButton = css`
  line-height: 2.5rem;
  background-color: var(--color-black-primary);
  color: var(--color-white);
  font-family: var(--font-family-bold);
  border: none;

  &:hover {
    background-color: #4c4c4c;
    color: var(--color-white);
  }
`;
export const navButton = css`
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
// ---------------------------------

// ---------------------------------
const StyledBackNavButton = styled.button`
  font-size: 1.5rem;
  font-family: var(--font-family-regular);
  line-height: 2.5rem;
  color: #000000;
  background-color: transparent;
  opacity: 0.5;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--color-orange-primary);
  }
`;

export const BackNavButton = () => {
  return (
    <StyledBackNavButton onClick={() => navigate(-1)}>
      Go back
    </StyledBackNavButton>
  );
};

const ButtonBase = styled.button<ButtonProps>`
  ${sharedStyle}
  ${(props) => props.variant};
`;
// ---------------------------------

// TODO: сделать разные батоны, но чтоб можно было применить стиль css

const Button = ({
  variant,
  to,
  title = "",
}: {
  variant: any;
  to?: string;
  title?: string;
}) => {
  return (
    <Link to={`/${to}`}>
      <ButtonBase variant={variant}>
        {title ? (
          title
        ) : (
          <>
            shop&nbsp;
            <img src={rightArrow} alt="" />
          </>
        )}
      </ButtonBase>
    </Link>
  );
};

export default Button;
