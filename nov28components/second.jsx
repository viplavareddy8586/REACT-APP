import React, { Component } from 'react';
import { getdetails } from './file1';
import Page from './page2';
import _ from 'lodash';
class Second extends Component {
    state = {
        example:getdetails(),
        perapage:2,
        currentpage:1
      } 
      handleevent=eachres=>{
        console.log(eachres+"clicked....")
        this.setState({currentpage:eachres})
     }
     pagefilterstudents(){
        const startIndex = ( this.state.currentpage - 1) * this.state.perapage;
        return _(this.state.example)
          .slice(startIndex)
          .take(this.state.perapage)
          .value();

     }
    render() { 
        const allemployees=this.pagefilterstudents();
        return (
            <div>
            <table className='table'>
            <thead>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>College</th>
                <th scope='col'>Branch</th>
                <th scope='col'>Fee</th>
            </thead>
            <tbody>
                {allemployees.map(
                    each=>
                    <tr>
                        <th scope='row'>{each.id}</th>
                        <td>{each.name}</td>
                        <td>{each.college}</td>
                        <td>{each.Branch}</td>
                        <td>{each.Fee}</td>
                    </tr>
                )}
            </tbody>
            </table>
            <Page totalstu={this.state.example.length}
            totalpages={this.state.perapage}
            totalevent={this.handleevent}
                 />
            </div>
        );
    }
}
 
export default Second;
