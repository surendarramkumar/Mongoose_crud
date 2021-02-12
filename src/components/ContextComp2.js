import React, { Component } from 'react'
import ContextComp3 from './ContextComp3'

export class ContextComp2 extends Component {
    render() {
        return (
            <div>
               <ContextComp3 /> 
            </div>
        )
    }
}

export default ContextComp2
