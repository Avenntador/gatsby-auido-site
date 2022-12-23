import styled, { css } from "styled-components";

const sharedStyle = css`
  text-transform: uppercase;
  color: ${(props: any) => (props.color ? props.color : "#000000")};
`;

export const TypographyH1 = styled.h1`
  ${sharedStyle}
  font-size: var(--h1-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--h1-line-height);
  letter-spacing: var(--h1-letter-spacing);
`;
export const TypographyH2 = styled.h2`
  ${sharedStyle}
  font-size: var(--h2-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--h2-line-height);
  letter-spacing: var(--h2-letter-spacing);
`;
export const TypographyH3 = styled.h3`
  ${sharedStyle}
  font-size: var(--h3-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--h3-line-height);
  letter-spacing: var(--h3-letter-spacing);
`;
export const TypographyH4 = styled.h4`
  ${sharedStyle}
  font-size: var(--h4-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--h4-line-height);
  letter-spacing: var(--h4-letter-spacing);
`;
export const TypographyH5 = styled.h5`
  ${sharedStyle}
  font-size: var(--h5-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--h5-line-height);
  letter-spacing: var(--h5-letter-spacing);
`;
export const TypographyH6 = styled.h6`
  ${sharedStyle}
  font-size: var(--h6-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--h6-line-height);
  letter-spacing: var(--h6-letter-spacing);
`;

export const TypographyOverline = styled.p`
  ${sharedStyle}
  font-size: var(--overline-font-size);
  font-family: var(--font-family-regular);
  line-height: var(--overline-line-height);
  letter-spacing: var(--overline-letter-spacing);
  opacity: 0.5;
`;
export const TypographySubtitle = styled.p`
  ${sharedStyle}
  font-size: var(--subtitle-font-size);
  font-family: var(--font-family-bold);
  line-height: var(--subtitle-line-height);
  letter-spacing: var(--subtitle-letter-spacing);
`;

export const TypographyBody = styled.p`
  font-size: var(--body-font-size);
  font-family: var(--font-family-medium);
  line-height: var(--body-line-height);
  opacity: 0.75;
  color: ${(props: any) => (props.color ? props.color : "#000000")};
`;
