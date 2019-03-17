import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import { connect } from "react-redux";
import { Home, Category, Gallery, AboutUs, JoinUs, AddSongs } from "./pages";
import Cookies from "universal-cookie";
import { sendRequest } from "./util/util";
import { songApi } from "./constant/api";
import { setSongs } from "./modules/songs/reducer";
import SongList from "./pages/admin/songList";

const cookies = new Cookies();
class App extends Component {
  componentDidMount() {
    if (cookies.get("accessToken")) {
      const thenFn = response => {
        this.props.setSongs({ songs: response.data.songs });
      };
      const errorFn = () => {
        alert("error loading update");
      };
      sendRequest(songApi.getUpdate, {
        updatekey: "FIRSTUPDATEKEY",
        success: { fn: thenFn },
        error: { fn: errorFn },
        accessToken: cookies.get("accessToken")
      });
    }
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />

          <Route path="/addSongs" component={AddSongs} />
          {/*<Route path="/aboutUs" component={AboutUs} /><Route path="/joinNow" component={JoinUs} />*/}
          <Route path="/songList" component={SongList} />
        </React.Fragment>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setSongs: payload => dispatch(setSongs(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
