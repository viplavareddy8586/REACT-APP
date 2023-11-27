import React, { Component } from 'react';
import _ from 'lodash';
class Pagination extends Component {
    state = {  
        showallstu:this.props.totalstu,
        showperpage:this.props.stuperpage
    } 
    render() { 
        const stup=this.state.showallstu / this.state.showperpage;
        const steup=_.range(1,stup+1);
        return (
           
            <nav aria-label="Page navigation example">
                  <ul class="pagination">
                      {steup.map(
                         eachstu=>
                       <li class="page-item"><a class="page-link">{eachstu}</a></li>
                       )}
    
                  </ul>
           </nav>
        );
    }
}
 
export default Pagination;