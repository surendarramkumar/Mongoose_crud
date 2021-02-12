import React, { Component } from 'react'

export class User1 extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
                
            </div>
        )
    }
}

export default User1
