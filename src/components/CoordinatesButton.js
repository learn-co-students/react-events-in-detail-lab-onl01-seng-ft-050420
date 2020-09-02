import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }

    handleMouseCoordinates = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render(){
        console.log(this.props)
        return (
        <button onClick={this.handleMouseCoordinates}>Push</button>
        )
        
    }
}
