import React, { Component } from 'react';

export default class DelayedButton extends Component {
    constructor(props){
        super(props)
    }

    delayClick = (e) => {
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        })
    }
    
    render(){
        return(
            <button onClick={this.delayClick}></button>
        )
    }
}
