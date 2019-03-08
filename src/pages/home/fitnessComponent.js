import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";
import ButtonSolid from "../../components/buttons/buttonSolid";
import ButtonStroke from "../../components/buttons/buttonStroke";
import OfferCard from "../../components/cardComponent/offerCard";
import IconComponent from "./iconComponent"
const FitnessComponent = props => {
  return (
    <div
      id="aboutUs"
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 200 * sizes.screenSizeFactor,
        paddingRight: 200 * sizes.screenSizeFactor
      }}
    >
      <div
        style={{
          flex: 3,
          alignItems: "center",
          display: "flex"
        }}
      >
        <Image
          source={images.homePersonFemale}
          style={{
            width:
              sizes.deviceWidth > sizes.deviceHeight
                ? "100%"
                : sizes.deviceWidth
          }}
        />
      </div>
      <div style={{ flex: 4, height: "100%" }}>
        <h1>
          All <b>About</b>
        </h1>
        <h1>Fitness</h1>
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </p>
        <div style={{ width: "100%" }}>
          <Row>
            <Col><IconComponent img={ images.icon1 } text={ "Weight Lifting" }/></Col>
            <Col><IconComponent img={ images.icon2 } text={ "Body Building"  }/></Col>
            <Col><IconComponent img={ images.icon3 } text={ "Cardio Exercise" }/></Col>
            <Col><IconComponent img={ images.icon4 } text={ "TRX" }/></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FitnessComponent;
