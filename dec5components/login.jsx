import React, { Component } from 'react';
class Login extends Component {
    state = {
        accountdetails:{
            username:"",
            password:""
        }
     } ;
     forsubmit=(w)=>{
        w.preventDefault();
        console.log("submit pressed");
        console.log("username-->"+this.state.accountdetails.username);
        console.log("password-->"+this.state.accountdetails.password);
     }
    //  forusernamechange=(c)=>{
    //     const viplav={...this.state.accountdetails};
    //     viplav.username=c.currentTarget.value;
    //     this.setState({accountdetails:viplav})
    //  }
    //  forpasswordchange=(p)=>{
    //     const rohith={...this.state.accountdetails};
    //     rohith.password=p.currentTarget.value;
    //     this.setState({accountdetails:rohith})
    //  }
    fortotalchange=(e)=>{
        const details={...this.state.accountdetails};
        details[e.currentTarget.name]=e.currentTarget.value;
        this.setState({accountdetails:details})
    }
    render() { 
        return (
            <form onSubmit={this.forsubmit}>
  <div className="mb-3">
    <label  className="form-label">User Name</label>
    <input type="text" 
   // onChange={this.forusernamechange}
   onChange={this.fortotalchange}
    value={this.state.accountdetails.username}
    className="form-control"
     id="User Name"
     name="username"
    />
    
  </div>
  <div class="mb-3">
    <label  className="form-label">Password</label>
    <input type="password"
    //onChange={this.forpasswordchange}
    onChange={this.fortotalchange}
    value={this.state.accountdetails.password}
     className="form-control" 
     id="password"
     name="password"/>
  </div>
  
  <button type="submit" 
  className="btn btn-primary">Submit</button>
</form>
        );
    }
}
 
export default Login;