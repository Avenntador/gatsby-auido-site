import React from "react";
import styled from "styled-components";
import { InputProps, sharedStyle } from "./inputsStyle";

const TextFieldWrapper = styled.div<InputProps>`
  display: inline-flex;
  flex-direction: column;
`;

const TextFieldBase = styled.input<InputProps>`
  ${sharedStyle}
  ${(props) => props.variant};
`;
const LabelBase = styled.label`
  display: inline-block;
  font-size: 1.2rem;
  font-family: var(--font-family-bold);
  margin-bottom: 0.9rem;
`;

const TextField = ({
  label,
  variant,
  placeHolder,
  style,
}: {
  label: string;
  variant: any;
  placeHolder: string;
  style?: any;
}) => {
  return (
    <TextFieldWrapper style={style}>
      <LabelBase htmlFor="input-label">{label}</LabelBase>
      <TextFieldBase
        id="input-label"
        type="text"
        placeholder={placeHolder}
        variant={variant}
      />
    </TextFieldWrapper>
  );
};

export default TextField;
