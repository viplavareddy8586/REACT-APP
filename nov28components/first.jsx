import React, { Component } from 'react';
import Pagination from './Pagination';
import _ from 'lodash';
class First extends Component {
    state = { 
        perpage:2,
        currentpage:1,
        student:[
            {
                "id":"1",
                "name":"viplav",
                "college":"Rec",
                "Branch":"EEE",
                "Fee":"14000"
            },
            {
                "id":"2",
                "name":"Rohith",
                "college":"Rec",
                "Branch":"CSE",
                "Fee":"34000"
            },
            {
                "id":"3",
                "name":"Charan",
                "college":"Rec",
                "Branch":"CSE",
                "Fee":"45000"
            },
            {
                "id":"4",
                "name":"Shiva",
                "college":"Srt",
                "Branch":"ECE",
                "Fee":"54000"
            },
            {
                "id":"5",
                "name":"Anand",
                "college":"Srt",
                "Branch":"ECE",
                "Fee":"140000"
            },
            {
                "id":"6",
                "name":"Pavan",
                "college":"Srt",
                "Branch":"CSE",
                "Fee":"48000"
            },
            {
                "id":"7",
                "name":"Deepthi",
                "college":"SRT",
                "Branch":"EEE",
                "Fee":"18000"
            },
            {
                "id":"8",
                "name":"PRIYA",
                "college":"Cbit",
                "Branch":"ECE",
                "Fee":"250000"
            },
            {
                "id":"9",
                "name":"Venkat",
                "college":"AP",
                "Branch":"Civil",
                "Fee":"25000"
            },
            {
                "id":"10",
                "name":"Vijju",
                "college":"Vignan",
                "Branch":"Mech",
                "Fee":"65000"
            }
            

        ]
       
      } 
      handlepagecontent=eachstu=>{
        console.log(eachstu+" clicked....");
       this.setState({currentpage:eachstu})
      }
      pagefilterresearch(){
        const startIndex = ( this.state.currentpage - 1) * this.state.perpage;
        return _(this.state.student)
          .slice(startIndex)
          .take(this.state.perpage)
          .value();

      }
      
    render() { 
        const allemp=this.pagefilterresearch();
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
                    {allemp.map(
                        stu=>
                        <tr>
                            <th scope='row'>{stu.id}</th>
                            <td>{stu.name}</td>
                            <td>{stu.college}</td>
                            <td>{stu.Branch}</td>
                            <td>{stu.Fee}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination totalstu={this.state.student.length} 
            stuperpage={this.state.perpage}
            pagecontent={this.handlepagecontent}/>
            </div>
        )
     
                    }
}
 
export default First;