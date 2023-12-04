import React, { Component } from 'react';
class Loginform extends Component {
    state = {  
        account:{
            username:"",
            password:""
        }
    };
    handlesubmitt=(e)=>{
     e.preventDefault();
     console.log("username--->"+this.state.account.username);
     console.log("password---->"+this.state.account.password)
    //  console.log(" submit pressed")
    }
    handleonchange=(e)=>{
  const account={...this.state.account};
  account[e.currentTarget.name]=e.currentTarget.value;
  this.setState({account})
    }
    render() { 
        return (
            <form onSubmit={this.handlesubmitt}>
  <div className="form-group">
    <label for="exampleInputEmail1">UserName</label>
    <input onChange={this.handleonchange} value={this.state.account.username}
    type="text" className="form-control" id="username" name="username"
/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={this.handleonchange} value={this.state.account.password}
    type="password" className="form-control" id="password" name="password"
     />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        );
    }
}
 
export default Loginform;