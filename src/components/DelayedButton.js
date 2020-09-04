import React from 'react'

class DelayedButton extends React.Component{
    handleClick = (e) => {
        e.persist()
        const prop = this.props;
        setTimeout(() => {
            prop.onDelayedClick(e)
        }, prop.delay)
    }

    render(){
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}

export default DelayedButton;