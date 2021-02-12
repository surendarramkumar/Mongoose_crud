import React, { Component } from 'react'

const UpdateComponent = OriginalComponent =>{
class NewComponent extends Component {
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
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} 
                {...this.props}   />
            </div>
        )
    }
}
return NewComponent
}
export default UpdateComponent
