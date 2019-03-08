import React, { Component } from "react";
import { Image } from "../../components";
import images from "../../assets/images";

export default class IconComponent extends Component {
    render() {
        return(
            <div className="text-center">
               <Image source={ this.props.img }  style={{ width : "80%" }}/>
               <br />
               <h6>{ this.props.text }</h6>
            </div>
        )
    }
}