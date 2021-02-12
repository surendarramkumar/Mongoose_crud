import React, { Component } from 'react'

export class CounterProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount= ()=>{
   this.setState(PrevState =>{
       console.log(PrevState)
      return {
          count:PrevState.count + 1
         } 
   })
    }



    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.incrementCount) }
            </div>
        )
    }
}

export default CounterProps
