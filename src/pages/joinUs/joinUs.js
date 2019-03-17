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
  CarouselControl,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
import { connect } from "react-redux";
import { getAboutUs } from "../../modules/home/reducer";
import sizes from "../../assets/dimension";
import _ from "lodash";
import FooterComponent from "../../components/footerComponent";
import OverViewComponent from "../../components/overViewComponent";
import HoverComponent from "../../components/hoverComponent";
import ButtonSolid from "../../components/buttons/buttonSolid";
import HeaderText from "../../components/headerText";
import Cookies from "universal-cookie";
import { sendRequest } from "../../util/util";
import { authApi } from "../../constant/api";
import { setAccessToken, getAccessToken } from "../../modules/auth/reducer";
import { withRouter } from "react-router-dom";
import { setSongs } from "../../modules/songs/reducer";

const cookies = new Cookies();

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
class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      isOverview: false,
      formItems: [
        {
          label: "Username",
          slug: "username",
          invalid: false,
          placeholder: "eg.(John Doe)",
          type: "text"
        },
        {
          label: "Password",
          slug: "password",
          invalid: false,
          placeholder: "Password",
          type: "password"
        }
      ],
      isLoader: false
    };
  }
  submit = () => {
    let { formItems } = this.state;
    let submitValues = {};
    let toSubmit = true;
    for (let i = 0; i < formItems.length; i++) {
      if (
        this.state[formItems[i].slug] != undefined &&
        this.state[formItems[i].slug] != ""
      ) {
        formItems[i].invalid = false;
        this.setState({ formItems });
        submitValues[formItems[i].slug] = this.state[formItems[i].slug];
      } else {
        formItems[i].invalid = true;
        toSubmit = false;
        this.setState({ formItems });
      }
    }
    if (toSubmit) {
      const thenFn = result => {
        this.setState({ isLoader: false });
        if (result.data) {
          this.props.setAccessToken({
            accessToken: result.data.accessToken || ""
          });
          this.props.setSongList({
            songs: result.data.songList.songs || []
          });
          cookies.set("username", result.data.username || "");
          cookies.set("accessToken", result.data.accessToken || "");

          this.props.history.push("/songList");
        }
      };
      const errorFn = () => {
        this.setState({ isLoader: false });
        alert("auth error");
      };
      this.setState({ isLoader: true });
      sendRequest(authApi.login, {
        ...submitValues,
        success: { fn: thenFn },
        error: { fn: errorFn }
      });
    }
  };
  render() {
    return (
      <div
        style={{
          overflowX: "hidden",
          background: "#fff",
          borderBottom: "5px solid rgb(238, 62, 123)"
        }}
      >
        <div
          style={{
            padding: 50 * sizes.screenSizeFactor
          }}
        >
          <HeaderText>Log in</HeaderText>
          <br />
          <br />
          {this.state.isLoader || this.props.accessToken != "" ? (
            <div>Logging In...</div>
          ) : (
            <div
              style={{
                padding: 10,
                borderRadius: 10,
                borderWidth: 0,
                borderColor: "#aaa",
                borderStyle: "solid",
                overflowY: "auto"
              }}
            >
              <Form>
                {_.map(this.state.formItems, item => (
                  <FormGroup key={item.slug}>
                    <Label for={item.slug}>{item.label}</Label>
                    <Input
                      type={item.type}
                      invalid={item.invalid}
                      placeholder={item.placeholder}
                      onChange={e => {
                        let a = {};
                        a[item.slug] = e.target.value;
                        this.setState(a);
                      }}
                    />
                    <FormFeedback tooltip>required</FormFeedback>
                  </FormGroup>
                ))}
                <div onClick={() => this.submit()}>
                  <ButtonSolid fontSize={18}>Sign in</ButtonSolid>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutUs: getAboutUs(state),
    accessToken: getAccessToken(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAccessToken: payload => dispatch(setAccessToken(payload)),
    setSongList: payload => dispatch(setSongs(payload))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(JoinUs)
);
