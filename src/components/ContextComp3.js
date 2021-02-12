import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ContextComp3 extends Component {
    render() {
        return (
            <div>
            <UserConsumer>
{
    (username)=>{
        return <h1>hello {username}</h1>
    }
}
            </UserConsumer>
                
            </div>
        )
    }
}

export default ContextComp3
