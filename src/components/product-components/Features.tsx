import React from "react";
import styled from "styled-components";
import { TypographyBody, TypographyH3 } from "../typography";
import ReactMarkdown from "react-markdown";

type FeaturesPropsType = {
  features: {
    feature: string;
    includes: {
      item: string;
      quantity: number;
      id: string;
    }[];
  };
};

const AttachmentProductWrapper = styled.div`
  display: flex;

  .product-features {
    max-width: 63.5rem;

    h3 {
      margin-bottom: 3.2rem;
    }
  }
  .product-attachment {
    display: flex;
    justify-content: center;
    flex: 1;

    div > h3 {
      margin-bottom: 3.2rem;
    }
  }
  .product-attachment-item {
    display: flex;

    .name {
      margin-left: 2.4rem;
    }

    .quantity {
      div {
        color: var(--color-orange-primary);
      }
    }
  }
`;

const Features = ({ features }: FeaturesPropsType) => {
  return (
    <AttachmentProductWrapper>
      <div className="product-features">
        <TypographyH3>Features</TypographyH3>
        <TypographyBody>
          <ReactMarkdown>{features.feature}</ReactMarkdown>
        </TypographyBody>
      </div>
      <div className="product-attachment">
        <div>
          <TypographyH3>IN THE BOX</TypographyH3>
          {features.includes.map((item) => {
            return (
              <div key={item.id} className="product-attachment-item">
                <div className="quantity">
                  <TypographyBody>{`${item.quantity}x`}</TypographyBody>
                </div>
                <div className="name">
                  <TypographyBody>{item.item}</TypographyBody>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AttachmentProductWrapper>
  );
};

export default Features;
