import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components";
import FooterComponent from "../../components/footerComponent";
import HeaderText from "../../components/headerText";
import { getAboutUs } from "../../modules/home/reducer";
import sizes from "../../assets/dimension";

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
class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Header currentPage="addSongs" lastScrollY={this.state.lastScrollY} />
        <div
          style={{
            marginTop: 100,
            paddingLeft: 50 * sizes.screenSizeFactor,
            paddingRight: 50 * sizes.screenSizeFactor
          }}
        >
          <div style={{ width: 50 }}>
            <HeaderText>
              <b>Add Song</b>
            </HeaderText>
          </div>
        </div>
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
)(AddSong);
