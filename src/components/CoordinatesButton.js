// Code CoordinatesButton Component Here
import React, { Component} from 'react'
export default class CoordinatesButton extends Component{
    
    handleMouseCoordinates = (event)=> {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
   

    render(){
        return(
            <button onClick={this.handleMouseCoordinates}></button>
            
        )
    }
}

