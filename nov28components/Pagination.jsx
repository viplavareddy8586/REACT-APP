import React, { Component } from 'react';
import _ from 'lodash';
class Pagination extends Component {
    state = { 
        showstu:this.props.totalstu ,
        showperpage:this.props.stuperpage
     } 
     
    render() {
        const allstudents=this.state.showstu/this.state.showperpage;
        const studentsperpage=_.range(1,allstudents+1);
        return (
           
            <nav aria-label="Page navigation example">
                  <ul class="pagination">
                      {studentsperpage.map(
                         eachstu=>
                       <li class="page-item"> <a class="page-link"
                        onClick={()=>{this.props.pagecontent(eachstu)}}>
                        {eachstu}</a></li>
                       )}
    
                  </ul>
           </nav>
        );
    }
}
 
export default Pagination;