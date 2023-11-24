import React, { Component } from 'react';
import { getEmps } from './file/first';
class First extends Component {
    state = { 
        employees:getEmps()
        
     } 
     deletebutton(){
        console.log("button clicked---")
     }
     showibmonly=(company)=>{
     const ibmemployes=this.state.employees.filter(
        eachshow=>eachshow.company==company
     )
     this.setState({employees:ibmemployes})
     }
     showtcsonly=(company)=>{
        const tcsemployes=this.state.employees.filter(
           eachshow=>eachshow.company==company
        )
        this.setState({employees:tcsemployes})
        }
        showinfyonly=(company)=>{
            const infyemployes=this.state.employees.filter(
               eachshow=>eachshow.company==company
            )
            this.setState({employees:infyemployes})
            }
        showall=()=>{
            const allemployees=getEmps()
            this.setState({employees:allemployees})
        }
    render() { 
        return (
            <div>
            <div>
           <button className='btn btn-danger m-2' onClick={()=>{this.showibmonly('IBM')}}>IBM</button>
           <button className='btn btn-warning m-4' onClick={()=>{this.showtcsonly('TCS')}}>TCS</button>
           <button className='btn btn-warning m-4' onClick={()=>{this.showinfyonly('INFY')}}>INFY</button>
           <button className='btn btn-primary'onClick={()=>this.showall()}>Refresh</button>
            </div>
            <table className='table table-warning'>
                <thead >
             <th scope='col'>ID</th>
             <th scope='col'>Name</th>
             <th scope='col'>Dept</th>
             <th scope='col'>Salary</th>
             <th scope='col'>Company</th>
             <th scope='col'>Action</th>
                </thead>
                <tbody >
               {this.state.employees.map(
                eachemp=>
                <tr >
                    <th scope='row'>{eachemp.id}</th>
                    <td>{eachemp.name}</td>
                    <td>{eachemp.dept}</td>
                    <td>{eachemp.salary}</td>
                    <td>{eachemp.company}</td>
                    <td><button className='btn btn-primary' 
                    onClick={this.deletebutton}>Delete</button></td>
                </tr>
               )}

                </tbody>
            </table>
            </div>
        );
    }
}
 
export default First;