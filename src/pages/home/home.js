import React, { Component } from "react";
import { Image, CircularIcon, Header } from "../../components";
import images from "../../assets/images";
import colors from "../../assets/colors";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl
} from "reactstrap";
import FirstComponent from "./firstComponent";
import { connect } from "react-redux";
import { getAboutUs } from "../../modules/home/reducer";
import OffersComponent from "./offersComponent";
import FitnessComponent from "./fitnessComponent";
import ScheduleComponent from "./scheduleComponents";
import BmiComponent from "./bmiComponent";
import FooterComponent from "../../components/footerComponent";
import OverViewComponent from "../../components/overViewComponent";
import SimpleIcon from "../../components/simpleIcon";
import JoinUs from "../joinUs/joinUs";
import sizes from "../../assets/dimension";
import HeaderText from "../../components/headerText";
import TestimonialComponent from "./testimonialComponent";
import OwnerQuote from "./ownerQuote";

const items = [
  {
    section: 1,
    image: images.homeTestimonial
  },
  {
    section: 2,
    image: images.homeTop
  },
  {
    section: 3,
    image: images.homeBmi
  }
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      currentPage: "home",
      isOverview: false,
      offers: [
        {
          head: "Boot Camp",
          price: "200",
          subText: "Find this.",
          shortDescription:
            "Lorem ipsum kinder joy stow away we best ourselves.",
          color: colors.colorSecondaryGradient,
          borderColor: colors.colorSecondary,
          image: images.offerCardImage1
        },
        {
          head: "Fast Gym",
          price: "200",
          subText: "Find this.",
          shortDescription:
            "Lorem ipsum kinder joy stow away we best ourselves.",
          color: colors.colorPrimaryGradient,
          borderColor: colors.colorPrimary,
          image: images.offerCardImage2
        },
        {
          head: "Gym Wym",
          price: "200",
          subText: "Find this.",
          shortDescription:
            "Lorem ipsum kinder joy stow away we best ourselves.",
          color: colors.colorComplementaryGradient,
          borderColor: colors.colorComplementary,
          image: images.offerCardImage3
        }
      ],
      gymBranches: [
        { name: "Zest Studio 1", slug: "zest1" },

        { name: "Zest Studio 2", slug: "zest2" }
      ]
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  updateJoinUs(isVisible) {
    this.setState({ isEnquiryForm: isVisible });
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  setOverviewVisible(visible, selected, index) {
    selected["index"] = index;
    this.setState({ isOverview: visible, selectedOffer: selected });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = event => {
    let lastScrollY = window.scrollY;
    this.setState({
      lastScrollY
    });
  };
  renderOfferFull() {
    return (
      <OverViewComponent onClick={() => {}}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.95)",
            borderBottom: "4px double " + this.state.selectedOffer.borderColor,
            borderTop: "8px solid " + this.state.selectedOffer.borderColor,
            color: "#fff"
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex"
            }}
          >
            {sizes.deviceHeight < sizes.deviceWidth ? (
              <div>
                <Image
                  source={this.state.selectedOffer.image}
                  style={{ height: "100%" }}
                />
              </div>
            ) : null}
            <div
              style={{
                padding: 10
              }}
            >
              <Row>
                <Col style={{ paddingTop: "10%" }}>
                  <HeaderText>{this.state.selectedOffer.head}</HeaderText>
                </Col>
                <Col
                  onClick={() => {
                    this.setState({ isOverview: false });
                  }}
                >
                  <span className="float-right">
                    <SimpleIcon iconName="mdi-close" iconColor="white" />
                  </span>
                </Col>
              </Row>
              <br />
              <br />
              <h4> Offer Price @{this.state.selectedOffer.price} only</h4>
              <br />
              <p>{this.state.selectedOffer.shortDescription}</p>
            </div>
          </div>
        </div>
      </OverViewComponent>
    );
  }
  renderForm() {
    return (
      <OverViewComponent onClick={() => {}}>
        <div
          style={{
            backgroundColor: colors.colorPrimary,
            borderRadius: "15px 10px"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <div
              onClick={() => {
                this.setState({ isEnquiryForm: false });
              }}
            >
              <SimpleIcon iconName="mdi-close" iconColor="black" />
            </div>
          </div>
          <JoinUs />
        </div>
      </OverViewComponent>
    );
  }

  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited}>
          <div
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "80% 50%",
              height: sizes.deviceHeight,
              width: sizes.deviceWidth
            }}
          />
        </CarouselItem>
      );
    });
    const carousel = () => (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        ride="carousel"
      >
        {slides}
      </Carousel>
    );
    return (
      <div style={{ overflowX: "hidden" }}>
        <Header
          currentPage="home"
          lastScrollY={this.state.lastScrollY}
          isHome={true}
          updateJoinUs={isVisible => this.updateJoinUs(isVisible)}
        />
        {this.state.isEnquiryForm ? this.renderForm() : null}
        {this.state.isOverview ? this.renderOfferFull() : null}
        <FirstComponent
          carousel={carousel}
          joinUsButton={() => {
            this.setState({ isEnquiryForm: true });
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TestimonialComponent />
        <FooterComponent gymBranches={this.state.gymBranches} />
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
)(Home);
