import React, { Component } from "react";
import { Image } from "./";
import images from "../assets/images";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import colors from "../assets/colors";
import sizes from "../assets/dimension";
import { NavLink } from "react-router-dom";
import ButtonSolid from "./buttons/buttonSolid";
import ButtonStroke from "./buttons/buttonStroke";
import OfferCard from "./cardComponent/offerCard";
import Icon from "./icon";

const BranchButton = props => (
  <div
    style={{
      borderRadius: 4,
      backgroundColor: props.color,
      fontSize: 15,
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      padding: 20,
      marginTop: 10
    }}
  >
    <h6
      style={{
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        marginRight: 5,
        marginBottom: 0
      }}
    >
      {props.name}
    </h6>
    <h6
      style={{
        opacity: 0.5,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 0
      }}
    >
      {"    " + props.subText}
    </h6>
  </div>
);
const FooterComponent = props => {
  return (
    <Jumbotron
      style={{
        flex: 1,
        backgroundColor: "#333",
        padding: 0,
        width: "100%",
        minHeight: "300px",
        margin: 0,
        borderRadius: 0
      }}
    >
      <Container>
        <Row className="text-left" style={{ color: "#e0e0e0" }}>
          <Col>
            <Row style={{ paddingTop: "40px", margin: "2px auto" }}>
              <Col>
                <span style={{ fontSize: 22 }}>Links</span>
                <br />
                <br />
                <div className="text-left" style={{ fontSize: 15 }}>
                  <p>Hello world</p>
                  <p>Hello world</p>
                  <p>Link tost tormat type </p>
                  <p>Standard post type</p>
                  <p>Gallery post format type</p>
                </div>
              </Col>
              <Col>
                <span style={{ fontSize: 22 }}> Visit Us</span>
                <div className="text-left" style={{ fontSize: 15 }}>
                  <br />
                  <p> This is an address.</p>
                  <p>+91 9955969767 </p>
                  <p> support@revivalsongs.org </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default FooterComponent;
