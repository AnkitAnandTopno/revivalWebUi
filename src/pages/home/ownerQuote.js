import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import {
    Container,
    Row,
    Col,
  } from "reactstrap";
  import colors from "../../assets/colors";
  import ButtonStroke from "../../components/buttons/buttonStroke";
  import Icon from "../../components/icon";


  class OwnerQuote extends Component{
    render() {
        return(
            <Container style={{ margin : "3% auto", boxShadow: "-5px 5px 50px #888888", padding: "60px"}}>
                <Row>
                <Col>
                <Image
                  source={images.homePersonFemale}
                  style={{ width: "90%" }}
                />
                </Col>
                <Col>
                <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  paddingTop : "30px",
                  margin : "1px auto"
                }}
              >
                <div style={{ flex: 1 }}>
                  <Icon
                    iconName="mdi-format-quote-open"
                    iconColor="rgba(151,200,235,0.8)"
                    iconSize={50}
                  />
                </div>

                <div style={{ flex: 7, alignItems: "center", display: "flex" }}>
                  <p style={{ fontSize: 30, textAlign: "center" }}>
                  Two day Gym workshop and the toughest, but the most daring on the fitness calender ! 
                    Online qualifiers start....
                    <br />
                  </p>

                  </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-end"
                  }}
                >
                  <Icon
                    iconName="mdi-format-quote-close"
                    iconColor="rgba(151,200,235,0.7)"
                    iconSize={50}
                  />
                </div>
                </div>
                  <br />
                  <br />
                  <div className="text-center" style={{flex: 7, alignItems: "center" }}>
                  <h3 > - <b>Jane Doe</b></h3>
                  <h6>Founder & CEO</h6>
                  </div>
                </Col>
                </Row>
            </Container>
        );
    }
  }

  export default OwnerQuote;