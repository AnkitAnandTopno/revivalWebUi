import React, { Component } from "react";
import { connect } from "react-redux";
import { SongCard, SongPreview } from "../../../components";
import _ from "lodash";

class AddSongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      isModal: false,
      activeSong: {}
    };
  }
  toggleModal() {
    this.setState(prevState => ({
      isModal: !prevState.isModal
    }));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        {_.map(this.props.songList, (item, index) => (
          <SongCard
            hindi={item.hindi}
            songName={item.songName}
            newNo={item.newNum}
            oldNo={item.oldNum}
            onDelete={() => this.props.onDelete(index)}
            onClick={() => {
              this.setState({ activeSong: item });
              this.toggleModal();
            }}
          />
        ))}

        <SongPreview
          toggle={() => this.toggleModal()}
          isModal={this.state.isModal}
          {...this.state.activeSong}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songList: ownProps.songList
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongList);
