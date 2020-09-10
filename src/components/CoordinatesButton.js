import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
     

    createCoordinates = (event) => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x,y]) 
      
    }

    render(){
        return(
            <button onClick={this.createCoordinates}></button>
        )
    }
}



