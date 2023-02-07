import React from "react";
import styled from "styled-components";
import { ButtonProps, sharedStyle } from "./buttonStyle";

const ActionButtonBase = styled.button<ButtonProps>`
  ${sharedStyle}

  :disabled {
    color: var(--color-black-primary);
    background-color: var(--color-gray-primary);
    pointer-events: none;
    cursor: default;
  }
  ${(props) => props.variant};
`;

const ActionButton = ({
  variant,
  onClick,
  title,
  style,
  disabled,
}: {
  variant: any;
  onClick: any;
  title: string;
  style?: any;
  disabled?: boolean;
}) => {
  return (
    <ActionButtonBase
      disabled={disabled}
      variant={variant}
      style={style}
      onClick={onClick}
    >
      {title}
    </ActionButtonBase>
  );
};

export default ActionButton;
