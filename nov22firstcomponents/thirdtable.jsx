import React, { Component } from 'react';
class Thirdtable extends Component {
    state = { 
        emps:[
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
            },
            {
                "id": 104,
                "name": "Viplav",
                "dept": "Bank",
                "salary":50000
            },
            {
                "id": 105,
                "name": "Rohith",
                "dept": "Insurance",
                "salary":15000
            }
        ]
     } 
    render() { 
        return (
            <table class="table">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">DEPT</th>
                    <th scope="col">SAL</th>
                </thead>
                <tbody>
                    {this.state.emps.map(
                        eachEmp=><tr>
                            <th scope="row">{eachEmp.id}</th>
                            <td>{eachEmp.name}</td>
                            <td>{eachEmp.dept}</td>
                            <td>Rs-{eachEmp.salary}/</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
 
export default Thirdtable;