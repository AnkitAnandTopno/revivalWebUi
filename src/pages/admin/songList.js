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
import { NavLink, withRouter } from "react-router-dom";
import { SongListComponent } from "./songListComponents";
import ButtonSolid from "../../components/buttons/buttonSolid";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      songList: []
    };
  }
  onDelete(songIndex) {
    let newSongListMain = _.cloneDeep(this.props.songs);
    newSongListMain = _.remove(newSongListMain, (item, index) => {
      return songIndex !== index;
    });
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
          <div style={{ flex: 2 }}>
            <div style={{ position: "fixed" }}>
              <HeaderText>
                <b>Song List</b>
              </HeaderText>
              <br />
              <NavLink to={"/addSongs"}>
                <ButtonSolid fontSize={15}>Add Songs</ButtonSolid>
              </NavLink>
            </div>
          </div>
          <div
            style={{
              flex: 10,
              display: "flex"
            }}
          >
            {this.props.songs && this.props.songs.length > 0 ? (
              <SongListComponent
                onDelete={songIndex => {
                  this.onDelete(songIndex);
                }}
              />
            ) : (
              <div>
                <span style={{ color: "#999" }}>No Song Added Yet</span>
                <NavLink
                  to={"/addSongs"}
                  style={{
                    color: "blue"
                  }}
                >
                  <p>click here add songs</p>
                </NavLink>
              </div>
            )}
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
)(SongList);
