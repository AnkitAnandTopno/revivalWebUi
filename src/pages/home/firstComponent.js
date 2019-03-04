import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import colors from "../../assets/colors";
const FirstComponent = props => {
  return (
    <div style={{ width: "100%" }}>
      <Container
        style={{
          position: "absolute",
          zIndex: 1000,
          width: "100%"
        }}
      >
        <Row>
          <Col />
          <Col xs="5">
            <div
              style={{
                backgroundColor: "rgba(43, 182, 115, 0.5)",
                width: "100%",
                padding: 20,
                paddingTop: 100
              }}
            >
              <h2 style={{ color: colors.colorWhite, textAlign: "end" }}>
                Abua Ho Dukan
              </h2>
              <InputGroup>
                <Input
                  name="search"
                  id="search"
                  placeholder="Search Services"
                />
                <Button color={colors.colorPrimary}>search</Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <Image source={images.map} style={{ width: "100%" }} />
    </div>
  );
};

export default FirstComponent;
