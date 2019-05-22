import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components";
import FooterComponent from "../../components/footerComponent";
import HeaderText from "../../components/headerText";
import { getAboutUs } from "../../modules/home/reducer";
import sizes from "../../assets/dimension";
import AdminHeader from "../../components/adminHeader";
import { sendRequest } from "../../util/util";
import { songApi } from "../../constant/api";
import { AddSongForm, AddSongList } from "./addSongComponents";
import _ from "lodash";
import { getSongs, setSongs, addSongs } from "../../modules/songs/reducer";

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      songList: []
    };
  }
  onDelete(songIndex) {
    let newSongList = _.cloneDeep(this.state.songList);
    newSongList = _.remove(newSongList, (item, index) => {
      return songIndex === index;
    });
    this.setState({ songList: newSongList });
  }
  addSong(newSong) {
    let newSongList = _.cloneDeep(this.state.songList);
    let newSongListMain = _.cloneDeep(this.props.songs);
    newSongList.push(newSong);
    newSongListMain.push(newSong);
    this.setState({ songList: newSongList });

    this.props.addSongs({ songs: newSongListMain });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <AdminHeader />
        <div
          style={{
            marginTop: 100,
            paddingLeft: 50 * sizes.screenSizeFactor,
            paddingRight: 50 * sizes.screenSizeFactor,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <div style={{ flex: 1 }}>
            <HeaderText>
              <b>Add Songs</b>
            </HeaderText>
          </div>
          <div
            style={{
              flex: 10,
              display: "flex"
            }}
          >
            <div
              style={{
                flex: 1.5
              }}
            >
              <AddSongForm addSong={newSong => this.addSong(newSong)} />
            </div>
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderLeftWidth: 0.5,
                borderLeftColor: "#ddd",
                borderLeftStyle: "solid"
              }}
            >
              <h4>New Songs Added</h4>
              {this.state.songList.length > 0 ? (
                <AddSongList
                  songList={this.state.songList}
                  onDelete={index => {
                    this.onDelete(index);
                  }}
                />
              ) : (
                <span style={{ color: "#999" }}>No New Song Added Yet</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: getSongs(state) || []
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
)(AddSong);
