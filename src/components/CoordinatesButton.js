import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coords Button</button>
      </div>
    )
  }
}
