import React from 'react';

class Message extends React.Component {
   
    constructor(){
super()
this.state={
    message:"welcome React"
}
    }
    change=()=>{
        this.setState({
            message:"thank you React"
        })
    }
  render(){
  return (
      <div>
 <h1>{this.state.message}</h1>
 <h3>{this.state.message}</h3>
<button onClick={this.change}>Submit</button>
      </div>
    
  );
  }
}

export default Message;
