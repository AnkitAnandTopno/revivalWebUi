import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  Form,
  Label,
  FormGroup,
  Alert, Modal, ModalHeader, FormFeedback,
} from "reactstrap";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";
import ButtonSolid from "../../components/buttons/buttonSolid";
import ButtonStroke from "../../components/buttons/buttonStroke";
import OfferCard from "../../components/cardComponent/offerCard";
import _ from "lodash";
import { rgba } from "style-value-types";

class BmiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: undefined,
      isHeight: false , 
      isWeight: false,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  validate(){
    if(this.state.weight == "" && this.state.height == ""){
        this.setState({isHeight : true, isWeight : true});
        return 0;
    }else if(this.state.weight == ""){
      this.setState({ isWeight : true });
      return 0;
    }else if(this.state.height == ""){
      this.setState({ isHeight : true });
      return 0;
    }
    return 1;
  }
  clicked = () => {
    if(this.validate()){
      let bmi = (this.state.weight / Math.pow(this.state.height, 2)) * 10000;
      this.setState({ bmi: Math.round(bmi * 10) / 10 });
      this.toggle();
    }
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${images.homeBmi})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: 100 * sizes.screenSizeFactor,
            color: "white",
            flexDirection: "column",
            flexWrap: "wrap",
            background: colors.colorSeparatorGradient
          }}
        >
          
            <div style={{ padding: 10 }}>
              <h1>
                Calculate your
                <br /> <b>BMI</b>
              </h1>
            </div>
            <div style={{ display: "block"}}>
            <Form>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                color: "white",
                flexWrap: "wrap"
              }}
            > 
              <FormGroup style={{ width: 200, padding: 10 }}>
                <Label for="height">Height in cm</Label>
                <Input
                  type="number"
                  name="height"
                  id="height"
                  invalid={ this.state.isHeight } 
                  placeholder="cm"
                  onChange={height => {
                    this.setState({ height: height.target.value , isHeight: false});
                  }}
                />
                <FormFeedback>This Field is Required</FormFeedback>
              </FormGroup>
              
              <FormGroup style={{ width: 200, padding: 10 }}>
                <Label for="weight">Weight in kg</Label>
                <Input
                  type="number"
                  name="weight"
                  id="weight"
                  invalid={ this.state.isWeight } 
                  placeholder="kg"
                  onChange={weight => {
                    this.setState({ weight: weight.target.value, isWeight: false });
                  }}
                />
                <FormFeedback>This Field is Required</FormFeedback>
              </FormGroup>
              

            
          </div>
          </Form>
          <div
              style={{ width: 200, padding: 10 }}
              onClick={() => this.clicked()}
            >
              <ButtonSolid fontSize={15}>Calculate BMI</ButtonSolid>
            </div>
          </div>
          { 
            this.state.bmi ? (
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ marginTop: 100, width: "300px"}}>
              <div toggle={this.toggle} style={{ 
                background: "rgba(0,0,0,0.1)",
                padding: 20,
                borderLeft: "8px solid rgb(238, 62, 123)",
            
            }}><div className="float-left" style={{
              margin: "1px auto",
              width: "150px",

            }}>Your Calculated BMI Score is</div><span className="float-right" style={{
              fontWeight: "600",
              fontSize: "28px",
            }}>{ this.state.bmi }</span></div>
            </Modal>
          ) : null }
        </div>
      </div>
    );
  }
}
export default BmiComponent;
