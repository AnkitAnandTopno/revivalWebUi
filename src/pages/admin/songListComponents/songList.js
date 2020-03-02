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
          {_.map(this.props.songHindi, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>Sadri</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songSadri, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>Mundari</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songMundari, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>Bhojpuri</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songBhojpuri, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>KURUKH</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songKurukh, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>Santhali</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songSanthaliHindi, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>English</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songEnglish, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <h4>Santhali</h4>
        <br />
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {_.map(this.props.songSanthaliEnglish, (item, index) => (
            <div>
              <div style={{ width: 250 }}>
                <SongCard
                  hindi={item.hindi}
                  songName={item.songName}
                  newNo={item.newNum}
                  oldNo={item.oldNum}
                  isDeletable={true}
                  onDelete={() => this.props.onDelete(index)}
                  onClick={() => {
                    this.setState({ activeSong: item, activeIndex: index });
                    this.toggleModal();
                  }}
                />
              </div>
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
    songList: getSongs(state) || [],
    songHindi:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          item.hindi && (item.newNum && item.newNum.split(" ")[1] == undefined)
      ) || [],
    songSadri:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          item.hindi && (item.newNum && item.newNum.split(" ")[0] === "S")
      ) || [],
    songMundari:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          item.hindi && (item.newNum && item.newNum.split(" ")[0] === "M")
      ) || [],
    songKurukh:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          item.hindi && (item.newNum && item.newNum.split(" ")[0] === "K")
      ) || [],
    songBhojpuri:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          item.hindi && (item.newNum && item.newNum.split(" ")[0] === "B")
      ) || [],
    songSanthaliHindi:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          item.hindi && (item.newNum && item.newNum.split(" ")[0] === "Sa")
      ) || [],
    songSanthaliEnglish:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          !item.hindi && (item.newNum && item.newNum.split(" ")[0] === "Sa")
      ) || [],
    songEnglish:
      _.filter(
        getSongs(state) || [],
        (item, index) =>
          !item.hindi && (item.newNum && item.newNum.split(" ")[0] === "E")
      ) || []
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
