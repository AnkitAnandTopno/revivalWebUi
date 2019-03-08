import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";
import ButtonSolid from "../../components/buttons/buttonSolid";
import ButtonStroke from "../../components/buttons/buttonStroke";
import OfferCard from "../../components/cardComponent/offerCard";
import HoverComponent from "../../components/hoverComponent";
import _ from "lodash";
import { Z_FIXED } from "zlib";
import { rgba } from "style-value-types";
const type = [
  { name: "ZUMBA", color: colors.colorPrimaryGradient },
  { name: "PILATES", color: colors.colorSecondaryGradient },
  { name: "BOLLY AEROBICS", color: colors.colorComplementaryGradient },
  { name: "TRX", color: colors.colorPrimaryGradient }
];
class ScheduleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeItem : "",
      days: [
        {
          name: "Monday",
          active: true,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.zumba
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        },
        {
          name: "Tuesday",
          active: false,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "12:30 am - 08:30 pm",
              description: "Some description about Zumba ",
              img : images.zumba,
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        },
        {
          name: "Wednesday",
          active: false,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.zumba,
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        },
        {
          name: "Thursday",
          active: false,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.zumba,
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        },
        {
          name: "Friday",
          active: false,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.zumba,
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        },
        {
          name: "Saturday",
          active: false,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.zumba,
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        },
        {
          name: "Sunday",
          active: false,
          sched: [
            {
              name: "ZUMBA",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.zumba,
            },
            {
              name: "PILATES",
              color: colors.colorSecondaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.pilates,
            },
            {
              name: "BOLLY AEROBICS",
              color: colors.colorComplementaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.bolly,
            },
            {
              name: "TRX",
              color: colors.colorPrimaryGradient,
              timing: "07:30 am - 08:30",
              description: "Some description about Zumba ",
              img : images.trx,
            }
          ]
        }
      ],
      selected: 0,
      day : "Default"
    };
    this.toggle = this.toggle.bind(this);
  }
  alter(items,d){
    this.toggle(); 
    this.setState({ activeItem : items ,day : d});
  }
  clicked(index) {
    let newState = this.state.days;
    newState[this.state.selected].active = false;
    newState[index].active = true;
    this.setState({ days: newState, selected: index });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  renderClassModal(){
    console.log(this.state.activeItem);
    return(
      <div> 
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ 
          margin: "7% auto",
          width: "800px",
          height: "500px",
          background: "rgba(0,0,0,0)"
          }}>
          <ModalHeader toggle={this.toggle} style={{background: this.state.activeItem.color, border: "none"}}></ModalHeader>
          <ModalBody toggle={this.toggle} style={{borderBottom : "4px solid "+ this.state.activeItem.color ,}}>
          <Container className="text-center">
          
            <h2 style={{borderBottom: "2px solid " + colors.colorPrimary }}>{this.state.activeItem.name} Group Class</h2>
            <Image source={this.state.activeItem.img} style={{width: "40%"}}/><br/>
            <p style={{ background : this.state.activeItem.color , color: "#fff"}}>Timing : {this.state.activeItem.timing }{ " on " + this.state.days[this.state.day].name }</p> 
            <h4>{this.state.activeItem.description}{ "   " + this.state.activeItem.name}</h4> 
        
          </Container>

          </ModalBody>
        </Modal>
      </div>
    );
  }
  render() {
    return (
      <div
        id="schedule"
        style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 200 * sizes.screenSizeFactor,
          paddingRight: 200 * sizes.screenSizeFactor,
          paddingTop: 100
        }}
      >

      { this.state.modal ? this.renderClassModal({}) : null }

        <div style={{ alignItems: "center" }}>
          <h1 style={{ textAlign: "center" }}>
            Group <b>Class</b> Schedule
          </h1>
          <p style={{ color: "#aaa", textAlign: "center" }}>
            Make yourself stronger than your excuses.
          </p>
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
        >
          {_.map(this.state.days, (items, index) => (
            <div
              style={{
                width: 80,
                height: 50,
                margin: 10,
                display: "flex",
                cursor: "pointer",
                flexDirection: "column"
              }}
              onClick={() => this.clicked(index)}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: items.active ? colors.colorPrimary : "#999"
                }}
              >
                {items.name}
              </span>
              <div
                style={{
                  width: 20,
                  height: 4,
                  backgroundColor: items.active ? colors.colorPrimary : "white"
                }}
              />
            </div>
          ))}
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
        >
          {_.map(this.state.days[this.state.selected].sched, (items, index) => (
            <HoverComponent >
              <div
                style={{
                  width: 150,
                  height: 150,
                  margin: 40,
                  display: "flex",
                  cursor: "pointer",
                  flexDirection: "column",
                  background: items.color,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center"
                }}

                onClick={ () => { 
                  this.alter(items,this.state.selected)
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  {items.name}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  {items.timing}
                </span>
              </div>
            </HoverComponent>
          ))}
        </div>
      </div>
    );
  }
}
export default ScheduleComponent;
