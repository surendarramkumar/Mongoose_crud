import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"surendar"
        }
console.log("lifecycleB constructor")
    }
     static getDerivedStateFromProps(props, state) {
        console.log("lifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
 console.log("LifecycleB componentDidMount")
    }
    render() {
        console.log("LifecycleB  render method")
        return (
            <div>
                lifecycleB
            </div>
        )
    }
}
export default LifecycleB
