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
  FormText,
  Modal,
  Progress
} from "reactstrap";
import { connect } from "react-redux";
import _ from "lodash";
import Cookies from "universal-cookie";
import ButtonSolid from "../../../components/buttons/buttonSolid";
import { convert_to_unicode } from "../../../util/stringUtil";
import SimpleIcon from "../../../components/simpleIcon";
import { songApi } from "../../../constant/api";
import { uploadFile } from "../../../util/util";
import colors from "../../../assets/colors";

const cookies = new Cookies();

class AddSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hindi: false,
      newNum: undefined,
      oldNum: undefined,
      songName: undefined,
      lyrics: [{ value: "", count: 1 }]
    };
  }
  submit = () => {
    let checkState = _.cloneDeep(this.state);
    checkState = _.omit(checkState, [
      "hindi",
      "isUploading",
      "upLoaderPercentage"
    ]);
    let isNotEmpty =
      this.state.newNum &&
      this.state.songName &&
      this.state.newNum !== "" &&
      this.state.songName !== "";
    if (isNotEmpty) {
      this.props.addSong({ ...this.state });

      checkState = _.mapValues(checkState, o => {
        return "";
      });
      checkState.lyrics = [{ value: "", count: 1 }];
      this.setState(_.assign({}, this.state, checkState));
    } else {
      alert("New song number or song name should not be left empty.");
    }
  };
  addLyricsSegment() {
    let newLyrics = this.state.lyrics;
    newLyrics.push({
      value: "",
      count: 1
    });
    this.setState({
      lyrics: newLyrics
    });
  }
  deleteLyricsSegment(index) {
    let newLyrics = this.state.lyrics;
    newLyrics = _.filter(
      newLyrics,
      (item, indexSegment) => index != indexSegment
    );
    this.setState({
      lyrics: newLyrics
    });
  }
  uploadSong(e) {
    if (e.target.files[0]) {
      this.setState({ isUploading: true });

      const progressFn = progresPercentage => {
        this.setState({ upLoaderPercentage: progresPercentage });
      };
      const thenFn = res => {
        this.setState({ isUploading: false, songTutorialLink: res });
      };
      const errorFn = () => {
        alert("error occurred while uploading.");
        this.setState({ isUploading: false });
      };
      uploadFile(songApi.uploadSong, {
        file: e.target.files[0],
        success: { fn: thenFn },
        error: { fn: errorFn },
        progress: { fn: progressFn }
      });
    }
  }
  render() {
    const { lyrics } = this.state;
    return (
      <div
        style={{
          overflowX: "hidden",
          background: "#fff",
          padding: 10
        }}
      >
        <Modal centered isOpen={this.state.isUploading}>
          <span>Uploading</span>
          <Progress value={this.state.upLoaderPercentage} />
        </Modal>
        <Form>
          <FormGroup
            check
            onChange={e => {
              this.setState({ hindi: e.target.value === "hindi" });
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
              style={{ fontFamily: this.state.hindi ? "hindi" : "arial" }}
              onChange={e => {
                this.setState({
                  songName: e.target.value
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Lyrics</Label>
            {_.map(lyrics, (item, index) => (
              <div
                key={"key" + index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  padding: 10
                }}
              >
                <Input
                  type="textarea"
                  name="lyrics"
                  value={item.value}
                  style={{
                    height: 100,
                    fontFamily: this.state.hindi ? "hindi" : "arial"
                  }}
                  onChange={e => {
                    let newLyrics = this.state.lyrics;
                    newLyrics[index].value = e.target.value;
                    this.setState({
                      lyrics: newLyrics
                    });
                  }}
                />
                <span>X</span>
                <Input
                  type="number"
                  name="lyricsCount"
                  value={item.count}
                  onChange={e => {
                    let newLyrics = this.state.lyrics;
                    newLyrics[index].count = e.target.value;
                    this.setState({
                      lyrics: newLyrics
                    });
                  }}
                  style={{ width: 50 }}
                  defaultValue={"1"}
                />
              </div>
            ))}
            <div
              onClick={() => {
                this.addLyricsSegment();
              }}
              style={{
                padding: 5,
                border: "1px solid #333",
                borderRadius: 2,
                width: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              +
            </div>
          </FormGroup>

          <div>
            <span>Upload song tutorial below</span>
            <SimpleIcon iconName="mdi-music" iconColor={colors.colorPrimary} />
            {this.state.songTutorialLink && !this.state.isUploading ? (
              <div style={{ display: "flex" }}>
                <audio controls>
                  <source src={this.state.songTutorialLink} type="audio/mpeg" />
                </audio>
                <SimpleIcon
                  onClick={() => this.setState({ songTutorialLink: undefined })}
                  iconName="mdi-close"
                  iconColor={colors.colorTextGrey}
                />
              </div>
            ) : null}
            <Input
              id={"fileUpload"}
              type="file"
              name="file"
              onChange={e => {
                this.uploadSong(e);
              }}
            />
          </div>
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
