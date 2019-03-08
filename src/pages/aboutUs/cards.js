import React, { Component } from "react";
import "./cards.css";

export default class Cards extends Component{
    render(){
        return(
            <div className="card">
                <img className="cardImg" src={ this.props.img } />
                <h3>{ this.props.name }</h3>
                <p>{ this.props.description }</p>
            </div>
        )
    }
}
