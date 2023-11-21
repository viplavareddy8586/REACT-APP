import React, { Component } from 'react';
class Second extends Component {
    state = {
        counter:0
    } 
    render() { 
        return (
                <span className='badge bg-primary'>{this.state.counter}</span>
        );
    }
}
 
export default Second;