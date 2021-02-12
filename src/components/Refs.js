import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputR=React.createRef()
    
        this.state = {
             
        }
    }
    componentDidMount(){
        this.inputR.current.focus()
        console.log(this.inputR)
    }
    clickhandler = () =>{
alert(this.inputR.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputR}></input>
                <button onClick={this.clickhandler}>click me</button>
            </div>
        )
    }
}

export default Refs
