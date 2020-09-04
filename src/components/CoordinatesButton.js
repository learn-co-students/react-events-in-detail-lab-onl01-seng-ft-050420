import React from 'react'

export default class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        let clicks = []
        clicks.push(e.clientX, e.clientY)
        return this.props.onReceiveCoordinates(clicks)
    }
   
    render (){
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}