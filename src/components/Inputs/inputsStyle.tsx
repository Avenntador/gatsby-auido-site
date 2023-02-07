import { css } from "styled-components";

export interface InputProps {
  readonly variant?: any;
}

// common
export const sharedStyle = css`
  min-width: 28rem;
  min-height: 5.6rem;
  border-radius: 0.8rem;
  border: 1px solid #cfcfcf;

  font-size: 1.4rem;
  font-family: var(--font-family-bold);
`;

export const mainInput = css`
  padding: 1.8rem 0 1.9rem 2.4rem;

  &:focus {
    outline: none;
    border: 1px solid #d87d4a;
  }

  &:invalid {
    outline: none;
    border: 2px solid #cd2c2c;
  }

  &::placeholder {
    opacity: 0.4;
  }
`;
