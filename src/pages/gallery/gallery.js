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
class Gallery extends Component {
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
        <Header currentPage="gallery" lastScrollY={this.state.lastScrollY} />
        <div
          style={{
            marginTop: 100,
            paddingLeft: 50 * sizes.screenSizeFactor,
            paddingRight: 50 * sizes.screenSizeFactor
          }}
        >
          <div style={{ width: 50 }}>
            <HeaderText>
              <b>PHOTO GALLERY</b>
            </HeaderText>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {_.map(this.state.picList, () => (
              <HoverComponent>
                <div
                  style={{
                    width: 250,
                    height: 250,
                    background: colors.colorSecondaryGradient,
                    margin: 10,
                    borderRadius: 8,
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    this.setState({ isOverview: true });
                  }}
                />
              </HoverComponent>
            ))}
          </div>
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
)(Gallery);
