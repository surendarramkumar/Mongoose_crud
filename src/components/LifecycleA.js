import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"surendar"
        }
console.log("lifecycleA constructor")
    }
     static getDerivedStateFromProps(props, state) {
        console.log("lifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
 console.log("LifecycleA componentDidMount")
    }
    render() {
        console.log("render method")
        return (
            <div>
                lifecycleA
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
