import React, { Component } from "react";
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
import _ from "lodash";
import Cookies from "universal-cookie";
import ButtonSolid from "../../../components/buttons/buttonSolid";
import { convert_to_unicode } from "../../../util/stringUtil";

const cookies = new Cookies();

class AddSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHindi: false,
      newNum: undefined,
      oldNum: undefined,
      songName: undefined,
      lyrics: undefined
    };
  }
  submit = () => {
    let checkState = _.cloneDeep(this.state);
    checkState = _.omit(checkState, ["isHindi"]);
    let isEmpty = _.findKey(checkState, o => o == undefined || o == "")
      ? true
      : false;
    if (!isEmpty) {
      this.props.addSong({ ...this.state });

      checkState = _.mapValues(checkState, o => {
        return "";
      });
      this.setState(_.assign({}, this.state, checkState));
    } else {
      console.log(this.state);
      alert("No value should be left empty.");
    }
  };
  render() {
    return (
      <div
        style={{
          overflowX: "hidden",
          background: "#fff",
          padding: 10
        }}
      >
        <Form>
          <FormGroup
            check
            onChange={e => {
              this.setState({ isHindi: e.target.value === "hindi" });
            }}
          >
            <FormGroup>
              <Label check>
                <Input type="radio" name="language" value="english" /> English
              </Label>
            </FormGroup>
            <FormGroup>
              <Label check>
                <Input type="radio" name="language" value="hindi" /> Hindi
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col>
                <Label>New No.</Label>
                <Input
                  type="text"
                  name="newNo"
                  placeholder="New Song Number"
                  onChange={e => {
                    this.setState({ newNum: e.target.value });
                  }}
                  value={this.state.newNum}
                />
              </Col>
              <Col>
                <Label>Old No.</Label>
                <Input
                  type="text"
                  name="oldNo"
                  placeholder="Old Song Number"
                  onChange={e => {
                    this.setState({ oldNum: e.target.value });
                  }}
                  value={this.state.oldNum}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label>Song Name</Label>
            <Input
              type="text"
              name="songName"
              placeholder="Song Name"
              value={this.state.songName}
              onChange={e => {
                this.setState({
                  songName: this.state.isHindi
                    ? convert_to_unicode(e.target.value)
                    : e.target.value
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Lyrics</Label>
            <Input
              type="textarea"
              name="lyrics"
              value={this.state.lyrics}
              style={{ fontSize: 10 }}
              onChange={e => {
                this.setState({
                  lyrics: this.state.isHindi
                    ? convert_to_unicode(e.target.value)
                    : e.target.value
                });
              }}
            />
          </FormGroup>

          <div onClick={() => this.submit()}>
            <ButtonSolid fontSize={18}>Add Song</ButtonSolid>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongForm);
