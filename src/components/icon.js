import React from "react";
import PropTypes from "prop-types";

class Icon extends React.Component {
  render() {
    return (
      <div
        style={{
          fontSize: this.props.iconSize,
          color: this.props.iconColor,
          fontSize: this.props.iconSize,
          lineHeight: 0,
          textAlign: "center"
        }}
      >
        <span className={"mdi " + this.props.iconName} />
      </div>
    );
  }
}

Icon.defaultProps = {
  iconBackgroundColor: "transparent",
  iconColor: "#fff",
  iconName: "mdi-file-question",
  iconSize: 20
};
export default Icon;
