import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
        super(props)
this.inputRef=React.createRef()
        this.state = {
             
        }
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
              <input type="text" ref={this.inputRef} />  
            </div>
        )
    }
}

export default InputRef
