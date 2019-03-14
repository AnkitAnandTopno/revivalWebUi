import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";
import ButtonSolid from "../../components/buttons/buttonSolid";
import ButtonStroke from "../../components/buttons/buttonStroke";
const FirstComponent = props => {
  return (
    <div
      style={{
        flex: 1,
        height: sizes.deviceHeight,
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: 270,
          position: "absolute",
          margin: 80 * sizes.screenSizeFactor,
          zIndex: 1000
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 77,
            textAlign: "center",
            fontFamily: "Allura"
          }}
        >
          Revival Songs
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            letterSpacing: 2,
            fontSize: 15
          }}
        >
          <b>Psalm 69:30</b>
          <br />I will praise the name of God with song And magnify Him with
          thanksgiving.
        </p>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ flex: 1, padding: 15 }} onClick={() => {}}>
            <ButtonSolid fontSize={12}>Get Your Copy</ButtonSolid>
          </div>
        </div>
      </div>
      <div style={{ height: "100%" }}>{props.carousel()}</div>
    </div>
  );
};

export default FirstComponent;
