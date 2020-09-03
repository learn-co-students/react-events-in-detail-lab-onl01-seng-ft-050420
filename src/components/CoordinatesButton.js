//Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {


    handleClick = e => this.props.onReceiveCoordinates([e.clientX, e.clientY])
    

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}



// export default function CoordinatesButton(props) {

//     return(
//         <div>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )


    
// }

// function handleClick(e) {
//     debugger
// }