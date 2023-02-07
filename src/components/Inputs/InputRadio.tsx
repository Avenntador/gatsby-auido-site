import React from "react";
import styled from "styled-components";

const InputRadioWrapper = styled.div``;

const InputRadioBase = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  appearance: none;
  display: grid;
  place-content: center;
  margin-right: 1.6rem;
  position: absolute;
  z-index: 1000;
  transform: translate(75%, 95%);

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    box-shadow: inset 1rem 1rem var(--color-gray-primary);
  }

  &:checked::before {
    transform: scale(1);
    box-shadow: inset 1rem 1rem var(--color-orange-primary);
  }
`;

const LabelBase = styled.label`
  display: inline-flex;
  position: relative;
  z-index: 100;
  align-items: center;
  width: 30.9rem;
  padding: 1.8rem 0 1.8rem 4.8rem;
  border: 1px solid #cfcfcf;
  border-radius: 0.8rem;
  font-family: var(--font-family-bold);
  font-size: 1.4rem;
  line-height: 1.9rem;

  &:hover {
    border: 1px solid var(--color-orange-secondary);
  }
`;

const InputRadio = ({
  id,
  name,
  label,
  defaultChecked,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  defaultChecked?: boolean;
  onChange: () => void;
}) => {
  return (
    <InputRadioWrapper>
      <InputRadioBase
        defaultChecked={defaultChecked}
        id={id}
        type="radio"
        title="input-radio"
        name={name}
        onChange={onChange}
      />
      <LabelBase htmlFor={id}>{label}</LabelBase>
    </InputRadioWrapper>
  );
};

export default InputRadio;
