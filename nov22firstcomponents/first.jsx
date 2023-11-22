import React, { Component } from 'react';
class First extends Component {
    state = {counter:1,
       Cities:["hyd","Bangalore","mumbai","Delhi"]  }
       getBadgeDanger(){
        return "badge bg-warning";
       } 
    render() { 
        const val="badge bg-danger";
        return (
            <div>
                <div className='badge bg-success'>{this.state.counter}</div>
                <div className='badge bg-primary'>Primary</div>
                <div className={this.getBadgeDanger()}>Warning</div>
                <div className={val}>Danger</div>
            </div>
        );
    }
}
 
export default First;