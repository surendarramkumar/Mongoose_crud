import React, { Component } from 'react'
import UpdatedComponent from './HocComponent'


class ClickCounter extends Component {
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times name {this.props.name}</button>
            </div>
        )
    }
}

export default  UpdatedComponent(ClickCounter)
