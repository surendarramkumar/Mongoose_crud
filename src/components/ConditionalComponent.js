import React, { Component } from 'react'

export class ConditionalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogedIn: false
        }

    }
    render() {
        if (this.state.isLogedIn) {
            return <div>Welcome React</div>
        } else {
            return <div><h1>Welcome Guest</h1></div>

        }
    }
}

export default ConditionalComponent
