import React, { Component } from 'react';
class Second extends Component {
    state = {  
        Cities:["Delhi","Hyd","TN","AP"]
    } 
    render() { 
        return (
            <div>
                {this.state.Cities.map(
                    eachcity=><h1>CityName--{eachcity}</h1>
                )}
            </div>
        );
    }
}
 
export default Second;