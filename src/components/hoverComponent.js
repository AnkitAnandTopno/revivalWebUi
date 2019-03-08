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
import posed from "react-pose";
const Box = posed.div({
  hoverable: true,
  init: {
    marginTop: 10
  },
  hover: {
    marginTop: 0
  }
});
const HoverComponent = props => {
  return <Box>{props.children}</Box>;
};

export default HoverComponent;
