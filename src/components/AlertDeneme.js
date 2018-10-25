import React from 'react';
import {Alert} from 'react-bootstrap';
export class AlertDeneme extends React.Component{

    render(){
        return(
            <Alert bsStyle="danger">
            <strong>{this.props.error.title}--{this.props.error.cover}</strong> 
            </Alert>);
    }
   
};