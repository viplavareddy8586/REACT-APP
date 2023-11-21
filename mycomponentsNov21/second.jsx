import React, { Component } from 'react';
class Second extends Component {
    state = {
        counter:0

    } 
    get countval(){
        if(this.state.counter==0) return "ZERO";
        return this.state.counter;
    }
    
    render() { 
        return (
           <div>
             <div>
                <span className='badge bg-primary'>{this.state.counter}</span>
            </div>
            <div>
                <span className='badge bg-primary'>Welcome to Unocareer</span>
            </div>
            <div>
            <span className='badge bg-primary'>{this.countval}</span>
            </div>
           </div>
                
        );
    }
}
 
export default Second;