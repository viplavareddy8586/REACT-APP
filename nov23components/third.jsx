import React, { Component } from 'react';
class Third extends Component {
    state = { counter:0 } 
    Incrementbutton=()=>{
        if(this.state.counter<20){
            {this.setState({counter:this.state.counter+1})}
        }
        
    }
    Decrementbutton=()=>{
        if(this.state.counter>0){
            {this.setState({counter:this.state.counter-1})}
        }
        
    }
    render() { 
        return (
            <div>
                <span className='badge bg-warning'>{this.state.counter}</span>
                <button className='btn btn-primary m-2'onClick={this.Incrementbutton}>+</button>
                <button className='btn btn-primary m-2'onClick={this.Decrementbutton}>-</button>
            </div>
        );
    }
}
 
export default Third;