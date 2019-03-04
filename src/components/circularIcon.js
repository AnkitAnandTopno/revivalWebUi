import React from "react";
import PropTypes from "prop-types";

class CircularIcon extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          fontSize: this.props.iconSize,
          backgroundColor: this.props.iconBackgroundColor,
          color: this.props.iconColor,
          fontSize: this.props.iconSize,
          width: this.props.iconSize * 2,
          height: this.props.iconSize * 2,
          lineHeight: this.props.iconSize * 2 + "px",
          textAlign: "center",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      >
        <span className={"mdi " + this.props.iconName} />
      </div>
    );
  }
}

CircularIcon.defaultProps = {
  iconBackgroundColor: "#666",
  iconColor: "#fff",
  iconName: "mdi-file-question",
  iconSize: 20
};
CircularIcon.PropTypes = {
  iconBackgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number
};
export default CircularIcon;
