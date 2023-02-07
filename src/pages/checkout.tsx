import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ActionButton from "../components/Buttons/ActionButton";
import { backNavButton } from "../components/Buttons/buttonStyle";
import { navigate } from "gatsby";
import {
  TypographyBody,
  TypographyH2,
  TypographyH6,
  TypographySubtitle,
} from "../components/typography";
import TextField from "../components/Inputs/TextField";
import { mainInput } from "../components/Inputs/inputsStyle";
import InputRadio from "../components/Inputs/InputRadio";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 8.9rem;
  background-color: var(--color-black-primary);
`;
const ContentWrapper = styled.main`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 7.9rem 0 14.1rem 0;

  & > * {
    margin-bottom: 16rem;
  }

  & > *:first-child {
    margin-bottom: 3.8rem;
  }

  .checkout-wrapper {
    display: flex;
    justify-content: space-between;

    .checkout,
    .summary {
      background-color: #ffffff;
      border-radius: 0.8rem;
    }

    .checkout {
      width: 73rem;
      padding: 5.4rem 4.8rem 4.8rem 4.8rem;

      & > *:not(:first-child):not(:last-child) {
        margin-bottom: 5.3rem;
      }
    }

    .summary {
      width: 35rem;
      height: 61.2rem;
      padding: 3.2rem 3.3rem;
    }
  }
`;
const BillingDetails = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr 1fr;
`;
const ShippingInfo = styled.div`
  display: grid;
  grid-gap: 2.4rem 1.6rem;
  grid-template-columns: 1fr 1fr;

  & div:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  & div:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
const PaymentDetails = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr 1fr;

  & div:nth-child(5) {
    grid-column-start: 2;
    grid-column-end: 3;
    place-items: center;
  }
`;

const CheckoutPage = () => {
  const [togglePayment, setTogglePayment] = useState(true);

  const togglePaymentHandler = () => {
    setTogglePayment((prevState) => !prevState);
  };

  return (
    <Layout style={{ backgroundColor: "#f1f1f1" }}>
      <HeaderWrapper />
      <ContentWrapper>
        <ActionButton
          title="Go back"
          variant={backNavButton}
          onClick={() => navigate(-1)}
        />
        <div className="checkout-wrapper">
          <form className="checkout">
            <TypographyH2 style={{ marginBottom: "5rem" }}>
              Checkout
            </TypographyH2>

            <BillingDetails>
              <TypographySubtitle style={{ color: "#D87D4A" }}>
                BILLING DETAILS
              </TypographySubtitle>
              <div></div>
              <TextField
                variant={mainInput}
                label={"Email Address"}
                placeHolder={"Enter email"}
              />
              <TextField
                variant={mainInput}
                label={"Phone Number"}
                placeHolder={"Enter phone"}
              />
              <TextField
                variant={mainInput}
                label={"Name"}
                placeHolder={"Enter name"}
              />
            </BillingDetails>

            <ShippingInfo>
              <TypographySubtitle style={{ color: "#D87D4A" }}>
                SHIPPING INFO
              </TypographySubtitle>
              <TextField
                variant={mainInput}
                label={"Address"}
                placeHolder={"Enter address"}
                style={{ width: "100%" }}
              />
              <TextField
                variant={mainInput}
                label={"ZIP Code"}
                placeHolder={"Enter code"}
              />
              <TextField
                variant={mainInput}
                label={"City"}
                placeHolder={"Enter city"}
              />
              <TextField
                variant={mainInput}
                label={"Country"}
                placeHolder={"Enter country"}
              />
            </ShippingInfo>

            <PaymentDetails>
              <TypographySubtitle style={{ color: "#D87D4A" }}>
                PAYMENT DETAILS
              </TypographySubtitle>
              <div></div>
              <TypographyBody
                style={{
                  fontSize: "1.2rem",
                  opacity: 1,
                  fontFamily: "Manrope-Bold",
                }}
              >
                Payment Method
              </TypographyBody>

              <InputRadio
                id="card"
                defaultChecked
                name="checkout-radio"
                label="e-Commerce"
              />
              <InputRadio
                id="cash"
                name="checkout-radio"
                label="Cash on Delivery"
              />

              {togglePayment ? (
                <>
                  <TextField
                    variant={mainInput}
                    label={"e-Money Number"}
                    placeHolder={"Enter e-Money"}
                    
                  />
                  <TextField
                    variant={mainInput}
                    label={"e-Money PIN"}
                    placeHolder={"Enter PIN"}
                  />
                </>
              ) : null}
            </PaymentDetails>
          </form>
          <div className="summary">
            <TypographyH6>Summary</TypographyH6>
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default CheckoutPage;
