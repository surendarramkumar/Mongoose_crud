import React, { Component } from 'react'

export class ChildrenComponent extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div>
               <button onClick={this.props.changeEvent}>clickme</button> 
            </div>
        )
    }
}

export default ChildrenComponent
