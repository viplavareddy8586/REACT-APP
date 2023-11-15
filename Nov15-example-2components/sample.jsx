import React, { Component } from 'react';
class Sample extends Component {
    state = { count:50,
              tags:["tag1","tag2","tag3"]} 
    render() { 
        return (
            <div>
                <div>From Sample component</div>
            {this.state.count}
            <ul>
                <li>{this.state.tags[0]}</li>
                <li>{this.state.tags[1]}</li>
                <li>{this.state.tags[2]}</li>
            </ul>
            <button>Click here</button>
            </div>
        
        );
    }
}
 
export default Sample;