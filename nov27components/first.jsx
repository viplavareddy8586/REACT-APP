import React, { Component } from 'react';
class First extends Component {
    state = { counter:this.props.namevalue,
              courses:this.props.course } 
    render() { 
        return (
            <div>
                <span className='badge bg-primary n-4'>{this.state.counter}</span>
                <span className='badge bg-success m-4'>{this.state.courses}</span>
                <span className='badge bg-danger m-4'>{this.props.children}</span>
                <button className='btn btn-warning'>+</button>
            </div>
        );
    }
}
 
export default First;