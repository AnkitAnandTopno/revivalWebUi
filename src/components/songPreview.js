import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import colors from "../assets/colors";
import Icon from "./icon";
import PropTypes from "prop-types";
import DecorTopLeftCorner from "./decor/decorTopLeftCorner";
import DecorTopRightCorner from "./decor/decorTopRightCorner";
import DecorBottomLeftCorner from "./decor/decorBottomLeftCorner";
import { DecorBottomRightCorner } from ".";
import ButtonSolid from "./buttons/buttonSolid";
import { SongListEditForm } from "../pages/admin/songListComponents";
import { convert_to_unicode } from "../util/stringUtil";

class SongPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false
    };
  }
  onClose() {
    this.setState({ isEditMode: false });
  }
  render() {
    let {
      hindi,
      songIndex,
      songName,
      newNum,
      oldNum,
      lyrics,
      updateSong
    } = this.props;
    return (
      <Modal
        centered
        isOpen={this.props.isModal}
        toggle={() => {
          this.onClose();
          this.props.toggle();
        }}
        className="preview"
      >
        <ModalHeader
          toggle={() => {
            this.onClose();
            this.props.toggle();
          }}
        >
          <h4 style={{ color: colors.colorPrimary }}>
            {" "}
            {newNum}. {hindi ? convert_to_unicode(songName) : songName}
          </h4>
          {!this.state.isEditMode && this.props.isSongList ? (
            <ButtonSolid
              onClick={() => {
                this.setState({ isEditMode: true });
              }}
            >
              Edit
            </ButtonSolid>
          ) : null}
        </ModalHeader>
        <ModalBody>
          {this.state.isEditMode ? (
            <div>
              <SongListEditForm
                {...this.props.activeSong}
                updateSong={song => {
                  this.onClose();
                  updateSong(song, songIndex);
                }}
              />
            </div>
          ) : (
            <div
              style={{
                padding: 1,
                border: `1px solid ${colors.colorPrimary}`,
                borderRadius: 10
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <DecorTopLeftCorner style={{ width: 100 }} />
                </div>
                <div style={{ flex: 6 }} />
                <div
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    display: "flex"
                  }}
                >
                  <DecorTopRightCorner style={{ width: 100 }} />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }} />
                <div
                  style={{ flex: 6, display: "flex", justifyContent: "center" }}
                >
                  <span style={{ whiteSpace: "pre-line", textAlign: "center" }}>
                    {hindi ? convert_to_unicode(lyrics) : lyrics}
                  </span>
                </div>
                <div style={{ flex: 1 }} />
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <DecorBottomLeftCorner style={{ width: 100 }} />
                </div>
                <div style={{ flex: 6 }} />
                <div
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    display: "flex"
                  }}
                >
                  <DecorBottomRightCorner style={{ width: 100 }} />
                </div>
              </div>
            </div>
          )}
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isModal: ownProps.isModal,

    songName: ownProps.songName,
    newNum: ownProps.newNum,
    oldNum: ownProps.oldNum,
    lyrics: ownProps.lyrics
  };
};
export default connect(
  mapStateToProps,
  null
)(SongPreview);
