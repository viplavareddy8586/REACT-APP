import React, { Component } from 'react';

import employees from "../nov23files/data"
class Fourthdelete extends Component {
    state = { 
        viplav:employees
     } 
     deleteemp=emp=>{
        const filtermovies=this.state.viplav.filter(
            eachemp=>
            eachemp.dept==emp.dept
        )
        this.setState({viplav:filtermovies})
     }
    render() { 
        return (
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Dept</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.viplav.map(eachviplav=>
    <tr>
    <th scope="row">{eachviplav.id}</th>
    <td>{eachviplav.name}</td>
    <td>{eachviplav.dept}</td>
    <td>{eachviplav.salary}</td>
    <td><button onClick={()=>this.deleteemp(eachviplav)}
    className='btn btn-warning'>Delete</button></td>
  </tr>
    )}
    
  </tbody>
</table>
        );
    }
}
 
export default Fourthdelete;