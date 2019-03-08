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
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";
import ButtonSolid from "../../components/buttons/buttonSolid";
import ButtonStroke from "../../components/buttons/buttonStroke";
import OfferCard from "../../components/cardComponent/offerCard";
import _ from "lodash";
import Icon from "../../components/icon";

class TestimonialComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: undefined,
      activeIndex: 0 ,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  testimonialItems = [
    {
      name : 'Jane Doe',
      designation: 'Customer 1',
      quote : 'One morning, when Gregor Samsa woke from troubled dreams.',
      profileImg : images.profile,
    },
    {
      name : 'Jane Doe',
      designation: 'Customer 2',
      quote : 'One morning, when Gregor Samsa woke from troubled dreams.',
      profileImg : images.profile,
    },{
      name : 'Jane Doe',
      designation: 'Customer 3',
      quote : 'One morning, when Gregor Samsa woke from troubled dreams.',
      profileImg : images.profile,
    },
  ];
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.testimonialItems.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.testimonialItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  clicked() {
    let bmi = (this.state.weight / Math.pow(this.state.height, 2)) * 10000;
    this.setState({ bmi: Math.round(bmi * 10) / 10 });
  }

  render() {
    const { activeIndex } = this.state;
    const slides =  this.testimonialItems.map((item) => {
      return (
        <CarouselItem 
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.designation}
        >
           <div
          style={{
            flex: 1,
            display: "flex",
            padding: 100 * sizes.screenSizeFactor,
            color: "white",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div>
            <div
              style={{
                padding: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "white",
                flexDirection: "row",
                flexWrap: "wrap",
                display: "flex"
              }}
            >
              <div
                style={{
                  flex: 3,
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundImage: `url(${item.profileImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                />
                <h5>{ item.name }</h5>
                <h6>{ item.designation }</h6>
              </div>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex"
                }}
              >
                <div style={{ flex: 1 }}>
                  <Icon
                    iconName="mdi-format-quote-open"
                    iconColor="white"
                    iconSize={40}
                  />
                </div>
                <div style={{ flex: 7, alignItems: "center", display: "flex" }}>
                  <p style={{ fontSize: 30, textAlign: "center" }}>
                    { item.quote }
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
                    iconColor="white"
                    iconSize={40}
                  />
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        </CarouselItem>
      );
    });
    
    return (
      <div
        style={{
          backgroundImage: `url(${images.homeTestimonial})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
       <div style={{background: colors.colorSeparatorGradient}}>
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.testimonialItems} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
      </div>
    );
  }
}
export default TestimonialComponent;
