import React from "react";
import colors from "../../assets/colors";

class ButtonStroke extends React.Component {
  render() {
    return (
      <div
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: colors.colorPrimary,
          borderStyle: "solid",
          fontSize: this.props.fontSize,
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: 10
        }}
      >
        <span
          style={{
            color: colors.colorPrimary,
            textAlign: "center"
          }}
        >
          {this.props.children}
        </span>
      </div>
    );
  }
}

ButtonStroke.defaultProps = {
  fontSize: 20
};
export default ButtonStroke;
