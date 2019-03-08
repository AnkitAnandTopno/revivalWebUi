import React, { Component } from "react";
import { Image } from "./";
import images from "../assets/images";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import colors from "../assets/colors";
import sizes from "../assets/dimension";
import { NavLink } from "react-router-dom";
import ButtonSolid from "./buttons/buttonSolid";
import ButtonStroke from "./buttons/buttonStroke";
import OfferCard from "./cardComponent/offerCard";
const OverViewComponent = props => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        zIndex: 100000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
      onClick={() => props.onClick(false)}
    >
      {props.children}
    </div>
  );
};

export default OverViewComponent;
