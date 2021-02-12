import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"helloworld"
        }
    }
    change=(a)=>{
        this.setState(
            {
                message:a
            }
        )
        console.log(this)
    }
    
    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>  
              <button onClick={()=>this.change("good bye")}>change txt</button>
            </div>
        )
    }
}

export default Eventbind
