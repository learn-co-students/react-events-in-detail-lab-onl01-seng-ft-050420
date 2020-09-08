// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    handleClick = (event) => {
        event.persist(); 
        // event.persist() -> Remember event pooling in React. By the time the setTimeout fires, the event object will have already been returned to the pool. 
        setTimeout(() => {
          this.props.onDelayedClick(event)
        }, this.props.delay);
      }
    
      render() {
        return (
          <button
            onClick={this.handleClick}>
          </button>
        )
      }
}