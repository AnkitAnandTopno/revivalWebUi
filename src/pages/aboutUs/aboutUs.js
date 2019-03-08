import React, { Component } from "react";
import { Image, CircularIcon, Header } from "../../components";
import images from "../../assets/images";
import Card from "./cards"
import Contain from "./contain"
import colors from "../../assets/colors";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl
} from "reactstrap";
import { connect } from "react-redux";
import { getAboutUs } from "../../modules/home/reducer";
import sizes from "../../assets/dimension";
import _ from "lodash";
import FooterComponent from "../../components/footerComponent";
import OverViewComponent from "../../components/overViewComponent";
import HoverComponent from "../../components/hoverComponent";
import HeaderText from "../../components/headerText";


const items = [
  {
    section: 1
  },
  {
    section: 2
  },
  {
    section: 3
  }
];
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      picList: [
        "skjdvnn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn",
        "lsndvn"
      ],
      isOverview: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderImage = (props) => <Image source={ props } />;
  renderText = (props) => <p style={{  padding: 26 }}>{ props }</p>;
  getText = (props) => props === 'left' ?  (
  <React.Fragment>
    <h3>Heading #1</h3> 
    <hr className="my-1" />
    <p className="lead">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </React.Fragment>
  )  : (
    <React.Fragment>
      <h3>Heading #2</h3> 
      <hr className="my-1" />
      <p className="lead">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      </React.Fragment>
    );
  getImg = (props) => props === 'left' ? images.homePersonFemale : images.homePersonFemale;
  renderOurTrainers = (n) => {
        return (<Container>
        <div style={{ width: 100 }}>
        <HeaderText>
          <b>Our Trainers</b>
        </HeaderText>
      </div>
    <Row>
    {this.gymOwner.map( (item) => <Col xs="12" sm="4"><Card img={item.img} name={item.name} description={item.description}></Card></Col> )}
    </Row>
    </Container>)
  }
  
  gymOwner = [
    {
      img : images.homePersonFemale,
      name : "Trainer 1",
      description : "Some description about owner",
    },
    {
      img : images.homePersonFemale,
      name : "Trainer 2",
      description : "Some description about owner",
    },
    {
      img : images.homePersonFemale,
      name : "Trainer 3",
      description : "Some description about owner",
    },
    {
      img : images.homePersonFemale,
      name : "Trainer 4",
      description : "Some description about owner",
    },
    {
      img : images.homePersonFemale,
      name : "Trainer 5",
      description : "Some description about owner",
    },
    {
      img : images.homePersonFemale,
      name : "Trainer 6",
      description : "Some description about owner",
    }
  ]
  
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        {this.state.isOverview ? (
          <OverViewComponent
            onClick={close => this.setState({ isOverview: close })}
          >
            <Image
              source={images.homeBmi}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </OverViewComponent>
        ) : null}
        <Header currentPage="aboutUs" lastScrollY={this.state.lastScrollY} />
        <div
          style={{
            marginTop: 100,
            paddingLeft: 50 * sizes.screenSizeFactor,
            paddingRight: 50 * sizes.screenSizeFactor
          }}
        >
          <div style={{ width: 50 }}>
            <HeaderText>
              <b>ABOUT US</b>
            </HeaderText>
          </div>
       
        <Container>
          <Contain right={this.renderText(this.getText("left"))} left={this.renderImage(this.getImg("right"))} addClass={ "false" }></Contain>
          <hr className="my-1" />
          <Contain left={ this.renderImage(this.getImg("left")) } right={ this.renderText(this.getText("right"))} addClass={"true"}></Contain>
          <hr className="my-1" />
        </Container>
       

       { this.gymOwner.length > 0 ?  this.renderOurTrainers() : <div></div> }
       
       
          <div style={{ marginTop: 60 }} />
        </div>
        <br />
        <FooterComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutUs: getAboutUs(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);
