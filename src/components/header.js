import React, { Component } from "react";
import colors from "../assets/colors";
import { NavLink } from "react-router-dom";
import image from "../assets/images";
import Image from "./image";
import { Container, Row, Col, Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Container
        style={{
          position: "fixed",
          padding: 20,
          zIndex: 10000
        }}
      >
        <Row>
          <Col xs="2">
            <Image source={image.logo} style={{ width: 100, height: 100 }} />
          </Col>
          <Col style={{ color: colors.colorPrimary }} />
          <Col xs="5">
            <Container>
              <Row>
                <Col>
                  <NavLink to="/">Home</NavLink>
                </Col>
                <Col>
                  <NavLink to="/category">Category</NavLink>
                </Col>
                <Col>Listings</Col>
                <Col>Register</Col>
                <Col>Login</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
