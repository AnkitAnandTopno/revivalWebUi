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

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lastScrollY: 0,
      songList: []
    };
  }
  onDelete(newNum, oldNum) {
    let newSongList = _.cloneDeep(this.state.songList);
    newSongList = _.remove(newSongList, item => {
      return item.newNum !== newNum && item.oldNum !== oldNum;
    });
    this.setState({ songList: newSongList });
  }
  addSong(newSong) {
    let newSongList = _.cloneDeep(this.state.songList);
    newSongList.push(newSong);
    this.setState({ songList: newSongList });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const thenFn = response => {
      this.setState({ songList: response.data.songs });
    };
    const errorFn = () => {
      alert("error loading update");
    };
    sendRequest(songApi.getUpdate, {
      updatekey: "FIRSTUPDATEKEY",
      success: { fn: thenFn },
      error: { fn: errorFn }
    });
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
            <div style={{ flex: 1, overflowY: "auto" }}>
              <AddSongList
                songList={this.state.songList}
                onDelete={(newNum, oldNum) => {
                  this.onDelete(newNum, oldNum);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutUs: getAboutUs(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSong);
