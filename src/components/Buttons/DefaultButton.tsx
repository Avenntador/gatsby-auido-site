import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ButtonProps, sharedStyle } from "./buttonStyle";

const LinkButtonBase = styled(Link)<ButtonProps>`
  ${sharedStyle}
  ${(props) => props.variant};
`;

const DefaultButton = ({
  variant,
  title,
  style,
  to,
}: {
  variant: any;
  title: string | React.ReactNode;
  to: string;
  style?: any;
  disabled?: boolean;
}) => {
  return (
    <LinkButtonBase to={`/${to}`} variant={variant} style={style}>
      {title}
    </LinkButtonBase>
  );
};

export default DefaultButton;
