import React from "react";
import colors from "../../assets/colors";

class ButtonSolid extends React.Component {
  render() {
    return (
      <div
        style={{
          borderRadius: 4,
          backgroundColor: colors.colorPrimary,
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
            color: "white",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          {this.props.children}
        </span>
      </div>
    );
  }
}

ButtonSolid.defaultProps = {
  fontSize: 20
};
export default ButtonSolid;
