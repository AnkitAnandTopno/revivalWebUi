import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Image } from "../../components";
import images from "../../assets/images";
import colors from "../../assets/colors";

class Category extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: colors.colorPrimary }}>Category</h1>
      </div>
    );
  }
}

export default Category;
