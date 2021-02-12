import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment ()  {
        this.setState(prevstate=>({
            count:prevstate.count + 1
        })
        )


        let count1 = this.state.count += 1
        console.log(count1)
    }
    incrementfive  () {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>count-{this.state.count}</h1>
                <button onClick={()=>this.incrementfive()}>Increment</button>
            </div>

        )
    }
}
export default Counter