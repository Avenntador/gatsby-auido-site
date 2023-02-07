import { css } from "styled-components";

export interface ButtonProps {
  readonly variant?: any;
}

// common
export const sharedStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 16rem;
  height: 4.8rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;
// в основном для link btns
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
// в основном для thumbnails
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
// в основном для prev or next btn
export const backNavButton = css`
  display: inline-block;
  cursor: pointer;
  padding: 0;
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: 0.5;
  font-family: var(--font-family-regular);
  color: var(--color-black-primary);
  background-color: transparent;
  border: none;
  outline: none;
  min-width: auto;
  height: auto;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    color: var(--color-orange-primary);
  }
`;
