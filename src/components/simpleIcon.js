import React from "react";
import PropTypes from "prop-types";

class SimpleIcon extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.onClick();
        }}
        style={{
          fontSize: this.props.iconSize,
          color: this.props.iconColor,
          fontSize: this.props.iconSize,
          width: this.props.iconSize * 2,
          height: this.props.iconSize * 2,
          borderRadius: this.props.iconSize,
          lineHeight: this.props.iconSize * 2 + "px",
          textAlign: "center",
          cursor: "pointer"
        }}
      >
        <span className={"mdi " + this.props.iconName} />
      </div>
    );
  }
}

SimpleIcon.defaultProps = {
  iconBackgroundColor: "transparent",
  iconColor: "#fff",
  iconName: "mdi-file-question",
  iconSize: 20,
  onClick: () => {}
};
export default SimpleIcon;
