import React, {Component} from 'react'

export default class DelayedButton extends Component {
    
    clicking=(event)=>{
        event.persist()
    setTimeout(() => {
        this.props.onDelayedClick(event)
    }, this.props.delay) //access it using this.props
        
    }

    render(){
        return(
        <button onClick = {this.clicking} ></button>
        )
    }
}