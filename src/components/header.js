import _ from "lodash";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
import { authApi } from "../constant/api";
import { connect } from "react-redux";
import { setAccessToken } from "../modules/auth/reducer";

const cookies = new Cookies();
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuClose: true,
      navList: [
        { name: "Home", slug: "home", type: "nav", path: "/", isVisible: true },
        {
          name: "Gallery",
          slug: "gallery",
          type: "nav",
          path: "/gallery",
          isVisible: true
        },
        {
          name: "Admin",
          slug: "songList",
          type: "nav",
          path: "/songList",
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
      ],
      currentPage: this.props.currentPage,
      classAnimate: "animated tada"
    };
  }
  changeState() {
    this.setState({ renderForm: true });
  }
  logOut() {
    const thenFn = result => {
      console.log("work");
      this.props.setAccessToken({
        accessToken: ""
      });
      cookies.remove("username");
      cookies.remove("accessToken");
      window.location.reload();
    };
    const errorFn = () => {
      alert("Log out failed");
    };
    sendRequest(authApi.logOut, {
      username: cookies.get("username"),
      accessToken: cookies.get("accessToken"),
      success: { fn: thenFn },
      error: { fn: errorFn }
    });
  }
  componentDidMount() {
    if (sizes.deviceHeight < sizes.deviceWidth) {
      this.setState({ isMenuClose: false });
    }
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
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          width: sizes.screenWidth,
          position: "fixed",
          zIndex: 10000,
          display: "flex",
          alignItems: "flexEnd",
          background:
            this.props.lastScrollY >= sizes.deviceHeight || !this.props.isHome
              ? "#333"
              : colors.colorHeaderGradient
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
          {sizes.deviceHeight > sizes.deviceWidth || this.state.isMenuClose ? (
            <div
              onClick={() => {
                this.setState({ isMenuClose: false });
              }}
            >
              <SimpleIcon iconName="mdi-menu" iconColor="white" iconSize={40} />
            </div>
          ) : (
            <div
              style={{
                flex: 1,
                flexDirection: "row",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              {_.map(this.state.navList, item => {
                if (item.isVisible) {
                  if (item.type === "nav") {
                    return (
                      <div
                        style={{
                          width: 150
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
                      <div
                        style={{
                          width: 150,
                          padding: 10
                        }}
                        onClick={() => item.action()}
                      >
                        <ButtonStroke fontSize={15} style={{ flex: 1 }}>
                          {item.name}
                        </ButtonStroke>
                      </div>
                    );
                  } else {
                    return (
                      <div style={{ width: 150 }}>
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
              {_.map(this.state.navList, item => {
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
                          item.action();
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
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setAccessToken: payload => dispatch(setAccessToken(payload))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Header);
