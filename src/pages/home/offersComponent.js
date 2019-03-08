import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";
import ButtonSolid from "../../components/buttons/buttonSolid";
import ButtonStroke from "../../components/buttons/buttonStroke";
import HoverComponent from "../../components/hoverComponent";
import OfferCard from "../../components/cardComponent/offerCard";
import _ from "lodash";
const OffersComponent = props => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {_.map(props.offerData, (item, index) => (
          <HoverComponent>
            <OfferCard
              onClick={() => props.onSelect(true, item, index)}
              head={item.head}
              price={item.price}
              subText={item.subText}
              cardColor={item.color}
            >
              {item.shortDescription}
            </OfferCard>
          </HoverComponent>
        ))}
      </div>
    </div>
  );
};

export default OffersComponent;
