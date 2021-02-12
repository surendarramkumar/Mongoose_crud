import React, { Component } from 'react'
import Input from './InputRef'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
    this.componentRef=React.createRef()
        this.state = {    
        }
    }
    clickhandler = ()  => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
            <Input ref={this.componentRef} />
               <button onClick={this.clickhandler}>click me</button> 
            </div>
        )
    }
}

export default FocusInput
