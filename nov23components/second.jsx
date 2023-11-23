import React, { Component } from 'react';
class Second extends Component {
    state = {
        counter:0
      } 
      Pressbutton=()=>{
        console.log("Button pressed!!!!!")
        console.log("this value"+this)
        {this.setState({counter:this.state.counter+1})}
      }
    render() { 
        return (
            <div>
                <span className='badge bg-warning'>{this.state.counter}</span>
                <button className='btn btn-primary m-2'onClick={this.Pressbutton}>Increment</button>
            </div>
        );
    }
}
 
export default Second;