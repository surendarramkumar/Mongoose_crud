import React, { Component } from 'react'
import axios from 'axios'
import './Form.css';


class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Email:"",
             password:""
        }
    }
    handler=event=>{
        this.setState({
            Email:event.target.value,
           
        })
    }
    passhandler=event=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=event=>{
        event.preventDefault();
        console.log(this.state)
const users={
Email:this.state.Email,
password:this.state.password
}
        axios.post(`http://192.168.43.151:8080/signup`,users)
        .then(res => {
          console.log(res);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form">
                <h1 id="log">Login To play</h1>
                    <label className="em"><b>Email:</b></label><br/>
                    <input type='email' value={this.state.Email} onChange={this.handler} name="kj"
                    placeholder="Enter Email" /><br/>
<label className="em"><b>Password:</b></label><br/>
                    <input type='password' value={this.state.password} onChange={this.passhandler} name="jk"
                    placeholder="Enter password" /><br/>
                    <button type="submit" className="button">Sign Up</button>
                </div>
            </form>               
            </div>
      
      
      )
    }
}
export default Signup
