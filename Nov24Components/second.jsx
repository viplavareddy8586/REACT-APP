import React, { Component } from 'react';
import { getstudent } from './file/second';
class Second extends Component {
    state = { 
        Example:getstudent()
     }
     failedmaths=()=>{

        const filtermaths=this.state.Example.filter(eachmaths=>
            eachmaths.mathsmarks<35)
            this.setState({Example:filtermaths})
     } 
     failedScience=()=>{
        const filterscience=this.state.Example.filter(eachscience=>
            eachscience.sciencemarks<35)
            this.setState({Example:filterscience})
     }
     failedSocial=()=>{
        const filtersocial=this.state.Example.filter(eachsocial=>
            eachsocial.socialmarks<35)
            this.setState({Example:filtersocial})
     }
     Showall=()=>{
        const all=getstudent()
        this.setState({Example:all})
     }
     Onlypassed=()=>{
        const onlypass=this.state.Example.filter(
            eachpassed=>
            eachpassed.mathsmarks>35 && eachpassed.sciencemarks>35 && eachpassed.socialmarks>35
        )
        this.setState({Example:onlypass})
     }
     OnlyFailed=()=>{
        const onlyfail=this.state.Example.filter(
            eachfailed=>
            eachfailed.mathsmarks<35 || eachfailed.sciencemarks<35 ||eachfailed.socialmarks<35
        )
        this.setState({Example:onlyfail})
     }
     Passedmaths=()=>{

        const filtermaths=this.state.Example.filter(eachmaths=>
            eachmaths.mathsmarks>35)
            this.setState({Example:filtermaths})
     }
     PassedScience=()=>{
        const filterscience=this.state.Example.filter(eachscience=>
            eachscience.sciencemarks>35)
            this.setState({Example:filterscience})
     }
     PassedSocial=()=>{
        const filtersocial=this.state.Example.filter(eachsocial=>
            eachsocial.socialmarks>35)
            this.setState({Example:filtersocial})
     }
    render() { 
        return (
           <div>
            <div>
                <button className='btn btn-primary m-2'onClick={()=>this.failedmaths()}>MathsFailed</button>
                <button className='btn btn-warning m-4'onClick={()=>this.failedScience()}>ScienceFailed</button>
                <button className='btn btn-success m-4'onClick={()=>this.failedSocial()}>SocialFailed</button>
                <button className='btn btn-danger m-4'onClick={()=>{this.Showall()}}>Refresh</button>
                <button className='btn btn-warning m-4'onClick={()=>{this.Onlypassed()}}>Passed</button>
                <button className='btn btn-primary m-4'onClick={()=>{this.OnlyFailed()}}>Failed</button>
                <button className='btn btn-warning m-4'onClick={()=>{this.Passedmaths()}}>PassedMaths</button>
                <button className='btn btn-warning m-4'onClick={()=>{this.PassedScience()}}>PassedScience</button>
                <button className='btn btn-success m-4' onClick={()=>{this.PassedSocial()}}>PassedSocial</button>
            </div>
             <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Maths</th>
                        <th scope='col'>Science</th>
                        <th scope='col'>Social</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Example.map(
                        eachstu=>
                        <tr>
                            <th scope='row'>{eachstu.studentname}</th>
                            <td>{eachstu.mathsmarks}</td>
                            <td>{eachstu.sciencemarks}</td>
                            <td>{eachstu.socialmarks}</td>
                        </tr>
                    )}
                </tbody>
            </table>
           </div>
        );
    }
}
 
export default Second;