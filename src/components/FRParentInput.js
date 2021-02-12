import React, { Component } from 'react'
import Input from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()

        this.state = {
             
        }
    }
    clickhandler = () =>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
            <Input ref={this.inputRef} />
                <button onClick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
