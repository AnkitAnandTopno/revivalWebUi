import _ from "lodash";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import colors from "../assets/colors";
import sizes from "../assets/dimension";
import image from "../assets/images";
import Image from "./image";
import SimpleIcon from "./simpleIcon";
import ButtonStroke from "../components/buttons/buttonStroke";
import "../assets/animations/animate.css";
import JoinUs from "../pages/joinUs/joinUs";
import OverViewComponent from "../components/overViewComponent";
import Cookies from "universal-cookie";
import { sendRequest } from "../util/util";
import { authApi, songApi } from "../constant/api";
import { connect } from "react-redux";
import { setAccessToken } from "../modules/auth/reducer";
import { Modal } from "reactstrap";
import { getIsUnsaved, getSongs, saveUnsaved } from "../modules/songs/reducer";
import ButtonSolid from "./buttons/buttonSolid";

const cookies = new Cookies();
class AdminHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalMessage: "",
      isMenuClose: true,
      navList: [],
      currentPage: this.props.currentPage,
      classAnimate: "animated tada"
    };
  }
  saveUnsaved() {
    const thenFn = result => {
      this.setState({ isModalVisible: false });
      this.props.saveUnsaved();
      alert("Song list saved");
    };
    const errorFn = () => {
      this.setState({ isModalVisible: false });
      alert("Save failed");
    };
    this.setState({ isModalVisible: true, modalMessage: "Saving" });
    sendRequest(songApi.updateSongList, {
      songs: this.props.songs,
      success: { fn: thenFn },
      error: { fn: errorFn }
    });
  }
  changeState() {
    this.setState({ renderForm: true });
  }
  logOut() {
    const thenFn = result => {
      this.props.setAccessToken({
        accessToken: ""
      });

      cookies.remove("username");
      cookies.remove("accessToken");

      setTimeout(() => {
        this.setState({ isModalVisible: false });
        this.props.history.push("/");
      }, 5000);
    };
    const errorFn = () => {
      this.setState({ isModalVisible: false });
      alert("Log out failed");
    };
    this.setState({ isModalVisible: true, modalMessage: "Logging Out" });
    sendRequest(authApi.logOut, {
      username: cookies.get("username"),
      accessToken: cookies.get("accessToken"),
      success: { fn: thenFn },
      error: { fn: errorFn }
    });
  }
  handleUnload(e) {
    if (this.props.isUnsaved) {
      return "wait";
    } else {
    }
  }
  componentDidMount() {
    this.setState({
      navList: [
        { name: "Home", slug: "home", type: "nav", path: "/", isVisible: true },
        {
          name: "Song List",
          slug: "songList",
          type: "nav",
          path: "/songList",
          isVisible: cookies.get("accessToken") ? true : false
        },
        {
          name: "Add Songs",
          slug: "addSongs",
          type: "nav",
          path: "/addSongs",
          isVisible: cookies.get("accessToken") ? true : false
        },
        {
          name: "Login",
          slug: "joinNow",
          type: "actionButton",
          path: "",
          action: () => {
            this.changeState();
          },
          isVisible: !cookies.get("accessToken") ? true : false
        },
        {
          name: "Logout",
          slug: "logOut",
          type: "actionButton",
          path: "",
          action: () => {
            this.logOut();
          },
          isVisible: cookies.get("accessToken") ? true : false
        }
      ]
    });
    window.onbeforeunload = e => this.handleUnload(e);
    if (sizes.deviceHeight < sizes.deviceWidth) {
      this.setState({ isMenuClose: false });
    }
  }
  toggle() {}
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
                this.setState({ renderForm: false });
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
    return (
      <div>
        <Modal
          isOpen={this.state.isModalVisible}
          toggle={() => this.toggle}
          className={"testModal"}
          centered={true}
        >
          <p>{this.state.modalMessage}...</p>
        </Modal>
        <div
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            width: sizes.screenWidth,
            position: "fixed",
            zIndex: 100,
            display: "flex",
            alignItems: "flexEnd",
            background: "#333"
          }}
        >
          {this.state.renderForm ? this.renderForm() : null}
          {sizes.deviceHeight < sizes.deviceWidth ? (
            <div style={{ flex: 4 }}>
              <div style={{ flex: 2, padding: 20 }}>
                {
                  //   <Image
                  //   source={image.logo}
                  //   style={
                  //     sizes.deviceHeight < sizes.deviceWidth
                  //       ? { height: sizes.logoHeight }
                  //       : { width: "100%" }
                  //   }
                  // />
                }
              </div>
            </div>
          ) : null}
          <div
            style={{
              flex: sizes.deviceHeight < sizes.deviceWidth ? 4 : 1,
              display: "flex",

              marginRight: "5%"
            }}
          >
            {sizes.deviceHeight > sizes.deviceWidth ||
            this.state.isMenuClose ? (
              <div
                onClick={() => {
                  this.setState({ isMenuClose: false });
                }}
              >
                <SimpleIcon
                  iconName="mdi-menu"
                  iconColor="white"
                  iconSize={40}
                />
              </div>
            ) : (
              <div
                style={{
                  flex: 1,
                  flexDirection: "row",
                  display: "flex",
                  height: "100%",
                  alignItems: "center"
                }}
              >
                {this.props.isUnsaved ? (
                  <div
                    style={{ marginRight: 10 }}
                    onClick={() => this.saveUnsaved()}
                  >
                    <ButtonSolid fontSize={15} style={{ flex: 1 }}>
                      Save
                    </ButtonSolid>
                  </div>
                ) : null}
                {_.map(this.state.navList, item => {
                  if (item.isVisible) {
                    if (item.type === "nav") {
                      return (
                        <div
                          style={{
                            flex: 1
                          }}
                        >
                          <NavLink
                            to={item.path}
                            style={{
                              color:
                                this.state.currentPage === item.slug
                                  ? colors.colorPrimary
                                  : "white"
                            }}
                          >
                            {item.name}
                          </NavLink>
                        </div>
                      );
                    } else if (item.type === "actionButton") {
                      return (
                        <div onClick={() => item.action()}>
                          <ButtonStroke fontSize={15} style={{ flex: 1 }}>
                            {item.name}
                          </ButtonStroke>
                        </div>
                      );
                    } else {
                      return (
                        <div style={{ flex: 1 }}>
                          <a
                            href={item.path}
                            style={{
                              color:
                                this.state.currentPage === item.slug
                                  ? colors.colorPrimary
                                  : "white"
                            }}
                          >
                            {item.name}
                          </a>
                        </div>
                      );
                    }
                  } else return null;
                })}
              </div>
            )}
          </div>
          {sizes.deviceHeight < sizes.deviceWidth ||
          this.state.isMenuClose ? null : (
            <div
              style={{
                width: sizes.deviceWidth,
                backgroundColor: "white",
                position: "fixed"
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: 10,
                  color: "white",
                  backgroundColor: "#333"
                }}
              >
                <div style={{ flex: 6 }}>Menu</div>
                <div
                  onClick={() => {
                    this.setState({ isMenuClose: true });
                  }}
                >
                  <SimpleIcon iconName="mdi-close" iconColor="white" />
                </div>
              </div>

              <div style={{ width: "100%" }}>
                {!this.props.isUnsaved ? (
                  <div
                    style={{ marginRight: 10 }}
                    onClick={() => this.saveUnsaved()}
                  >
                    <ButtonSolid fontSize={15} style={{ flex: 1 }}>
                      Save
                    </ButtonSolid>
                  </div>
                ) : null}
                {_.map(this.state.navList, (item, index) => {
                  if (item.isVisible) {
                    if (item.type === "nav") {
                      return (
                        <NavLink
                          to={item.path}
                          style={{
                            color:
                              this.state.currentPage === item.slug
                                ? colors.colorPrimary
                                : "black"
                          }}
                        >
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              justifyContent: "flex-start",
                              padding: 10
                            }}
                          >
                            {item.name}
                          </div>
                        </NavLink>
                      );
                    } else if (item.type == "actionButton") {
                      return (
                        <div
                          onClick={() => {
                            item.action(index);
                          }}
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: 10
                          }}
                        >
                          {item.name}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: 10
                          }}
                        >
                          <a
                            href={item.path}
                            style={{
                              color:
                                this.state.currentPage === item.slug
                                  ? colors.colorPrimary
                                  : "black"
                            }}
                          >
                            {item.name}
                          </a>
                        </div>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUnsaved: getIsUnsaved(state),
    songs: getSongs(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAccessToken: payload => dispatch(setAccessToken(payload)),
    saveUnsaved: payload => dispatch(saveUnsaved(payload))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminHeader)
);
