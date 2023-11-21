import React, { Component } from 'react';
class First extends Component {
    state = {  
      emps:  [
            {
                "id": 101,
                "name": "Abdul",
                "dept": "IT",
                "salary":45000
            },
            {
                "id": 102,
                "name": "John",
                "dept": "Sales",
                "salary":25000
            },
            {
                "id": 103,
                "name": "Ramu",
                "dept": "Admin",
                "salary":15000
            }
        ]
    } 
   
    render() { 
        return (
            <table className="table">
  <thead>
    <tr>
      <th scope="col">DEPT</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
                <tbody>
                {this.state.emps.map(eachemp =>
    <tr>
      <th scope="row">{eachemp.dept}</th>
      <td>{eachemp.id}</td>
      <td>{eachemp.name}</td>
      <td>{eachemp.salary}</td>
    </tr>
            )
                }
    </tbody>
    </table>
    
  );
    }
}
 
export default First;