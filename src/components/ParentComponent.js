import React, { Component } from 'react'
import Child from './ChildrenComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentname:"parent" 
        }
    }
    change=(name)=>{
        this.setState({
            parentname:`Child name is ${name} `
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.parentname}</h1>
<Child changeEvent={()=>this.change("mark") }/>
            </div>
        )
    }
}

export default ParentComponent
