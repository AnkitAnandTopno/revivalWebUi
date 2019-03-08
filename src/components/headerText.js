import React from "react";
import PropTypes from "prop-types";
import colors from "../assets/colors";

class HeaderText extends React.Component {
  render() {
    return (
      <div
        style={{
          borderBottom: `1px solid ${colors.colorPrimary}`
        }}
      >
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
HeaderText.defaultProps = {};
export default HeaderText;
