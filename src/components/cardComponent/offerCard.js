import React from "react";
import colors from "../../assets/colors";
import sizes from "../../assets/dimension";

class OfferCard extends React.Component {
  render() {
    return (
      <div
        style={{
          width:
            sizes.deviceWidth > sizes.deviceHeight ? 300 : sizes.deviceWidth,
          background: this.props.cardColor,
          padding: 20,
          color: "white",
          cursor: "pointer"
        }}
        onClick={() => this.props.onClick()}
      >
        <h6>{this.props.head}</h6>
        <h2>{this.props.price}</h2>
        {this.props.subText ? <h5>{this.props.subText}</h5> : null}
        <br />
        <p
          style={{
            textOverflow: "ellipsis"
          }}
        >
          {this.props.children}
        </p>
        <br />
      </div>
    );
  }
}

OfferCard.defaultProps = {
  head: "*head props is mandatory*",
  price: "*price props is mandatory*",
  cardColor: colors.colorPrimary
};
export default OfferCard;
