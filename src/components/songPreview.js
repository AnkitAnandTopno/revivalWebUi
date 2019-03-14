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

class SongPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { songName, newNum, oldNum, lyrics } = this.props;
    return (
      <Modal
        centered
        isOpen={this.props.isModal}
        toggle={this.props.toggle}
        className="preview"
      >
        <ModalHeader toggle={this.props.toggle}>
          <h4 style={{ color: colors.colorPrimary }}>
            {" "}
            {newNum}. {songName}
          </h4>
        </ModalHeader>
        <ModalBody>
          <div
            style={{ padding: 2, border: `1px solid ${colors.colorPrimary}` }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <DecorTopLeftCorner style={{ width: 100 }} />
              </div>
              <div style={{ flex: 6 }} />
              <div
                style={{ flex: 1, justifyContent: "flex-end", display: "flex" }}
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
                  {lyrics}
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
                style={{ flex: 1, justifyContent: "flex-end", display: "flex" }}
              >
                <DecorBottomRightCorner style={{ width: 100 }} />
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isModal: ownProps.isModal
  };
};
export default connect(
  mapStateToProps,
  null
)(SongPreview);
