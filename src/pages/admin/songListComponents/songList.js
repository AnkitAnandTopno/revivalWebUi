import React, { Component } from "react";
import { connect } from "react-redux";
import { SongCard, SongPreview } from "../../../components";
import _ from "lodash";
import { SongListEditForm } from ".";
import { setSongs, getSongs, addSongs } from "../../../modules/songs/reducer";

class SongListComponent extends Component {
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
  updateSong(song, songIndex) {
    let newSongListMain = _.cloneDeep(this.props.songList);
    newSongListMain[songIndex] = song;
    console.log(newSongListMain, songIndex);
    this.props.addSongs({ songs: newSongListMain });
    this.setState({ activeSong: song });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ paddingLeft: 10 }}>
        <h4>Hindi</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songList, (item, index) => (
            <div>
              {item.hindi ? (
                <div style={{ width: 250 }}>
                  <SongCard
                    hindi={item.hindi}
                    songName={item.songName}
                    newNo={item.newNum}
                    oldNo={item.oldNum}
                    onDelete={() => this.props.onDelete(index)}
                    onClick={() => {
                      this.setState({ activeSong: item, activeIndex: index });
                      this.toggleModal();
                    }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <br />
        <h4>English</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songList, (item, index) => (
            <div>
              {!item.hindi ? (
                <div style={{ width: 250 }}>
                  <SongCard
                    hindi={item.hindi}
                    songName={item.songName}
                    newNo={item.newNum}
                    oldNo={item.oldNum}
                    onDelete={() => this.props.onDelete(index)}
                    onClick={() => {
                      this.setState({ activeSong: item, activeIndex: index });
                      this.toggleModal();
                    }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <SongPreview
          toggle={() => this.toggleModal()}
          isModal={this.state.isModal}
          {...this.state.activeSong}
          activeSong={{ ...this.state.activeSong }}
          songIndex={this.state.activeIndex}
          isSongList={true}
          updateSong={(song, songIndex) => {
            this.updateSong(song, songIndex);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songList: getSongs(state) || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addSongs: payload => dispatch(addSongs(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListComponent);
