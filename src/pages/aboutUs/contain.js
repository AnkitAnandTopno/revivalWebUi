import React, { Component } from "react";
import { Row, Col, Container } from 'reactstrap';

export default class Test extends Component{
    render(){
        let classes = "text-center ";
        classes +=  this.props.addClass === "true" ? "d-flex flex-lg-row-reverse flex-md-row-reverse" : " ";
         return(
        <Row className={ classes }>
           <Col><Container>{ this.props.left }</Container></Col>
           <Col><Container>{ this.props.right }</Container></Col>
         </Row>
        )
    }
}