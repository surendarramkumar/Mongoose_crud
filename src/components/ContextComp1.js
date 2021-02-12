import React, { Component } from 'react'
import ContextComp2 from './ContextComp2'

export class ContextComp1 extends Component {
    render() {
        return (
            <div>
            <ContextComp2 />    
            </div>
        )
    }
}

export default ContextComp1
