import React, { Component } from "react";
import { Image, CircularIcon } from "../../components";
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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
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
  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.section}
        >
          <Container>
            <Row style={{ flex: 1, justifyContent: "center" }}>
              <Col xs="auto">
                <div
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: colors.colorPrimary
                  }}
                />
              </Col>
              <Col xs="auto">
                <div
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: colors.colorPrimary
                  }}
                />
              </Col>
              <Col xs="auto">
                <div
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: colors.colorPrimary
                  }}
                />
              </Col>
            </Row>
          </Container>
        </CarouselItem>
      );
    });
    return (
      <div>
        <FirstComponent />
        <div className="aboutUs" style={{ padding: 60 }}>
          <Container>
            <Row>
              <Col>
                <h3 style={{ color: colors.colorTextGrey }}>Abua Ho Dukan</h3>
                <h4 style={{ color: colors.colorPrimary }}>स्वरोजगार की ओर</h4>
                <p
                  style={{
                    wordWrap: "break-word",
                    color: colors.colorTextGrey
                  }}
                >
                  {this.props.aboutUs}
                </p>
              </Col>
              <Col>
                <Image source={images.person1} style={{ width: 400 }} />
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ width: "100%" }}>
          <h4 style={{ textAlign: "center", color: colors.colorTextGrey }}>
            Popular Shops
          </h4>
        </div>
        <div style={{ padding: 60, backgroundColor: "rgba(43,182,15,0.5)" }}>
          <Carousel
            activeIndex={this.state.activeIndex}
            next={this.next}
            previous={this.previous}
          >
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
              color={colors.colorPrimary}
              style={{
                backgroundColor: colors.colorPrimary
              }}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
              cssModule={{ backgroundColor: colors.colorPrimary }}
            />
          </Carousel>
        </div>
        <div style={{ padding: 150 }}>
          <Container>
            <Row>
              <Col>
                <div
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image source={images.person2} style={{ width: 200 }} />
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "right",
                    color: colors.colorTextGrey,
                    justifyItem: "center"
                  }}
                >
                  <h4>CONTACT US</h4>
                  <h6>Phone Number</h6>
                  <p style={{ color: colors.colorPrimary }}>9955969767</p>
                  <p style={{ color: colors.colorPrimary }}>99559697xx</p>
                  <h6>E-mail Address</h6>
                  <p style={{ color: colors.colorPrimary }}>
                    support@abuahodukan.com
                  </p>
                  <h6>Social Media</h6>
                  <Container>
                    <Row>
                      <Col />
                      <Col>
                        <Container>
                          <Row>
                            <Col xs="auto" style={{ padding: 5 }}>
                              <CircularIcon
                                iconName="mdi-facebook"
                                iconSize={20}
                                iconBackgroundColor={colors.colorPrimary}
                              />
                            </Col>
                            <Col xs="auto" style={{ padding: 5 }}>
                              <CircularIcon
                                iconName="mdi-twitter"
                                iconSize={20}
                                iconBackgroundColor={colors.colorPrimary}
                              />
                            </Col>
                            <Col xs="auto" style={{ padding: 5 }}>
                              <CircularIcon
                                iconName="mdi-google-plus"
                                iconSize={20}
                                iconBackgroundColor={colors.colorPrimary}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ width: "100%" }}>
          <h5 style={{ textAlign: "center" }}>
            Developed By{" "}
            <span style={{ color: colors.colorPrimary }}>
              Ankit Anand Topno
            </span>
          </h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutUs: state.home.aboutUs
  };
};
export default connect(mapStateToProps)(Home);
