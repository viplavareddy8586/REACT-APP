import React, { Component } from 'react';
import _ from 'lodash';
class Page extends Component {
    state = { 
        showstu:this.props.totalstu,
        showpage:this.props.totalpages
     } 
    
    render() { 
        const totalperpage=this.state.showstu/this.state.showpage;
           const resultantpage= _.range(1,totalperpage+1);
        return (
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    {resultantpage.map(
        eachres=>
        <li class="page-item"><a class="page-link" 
        onClick={()=>{this.props.totalevent(eachres)}} >{eachres}</a></li>
    )}
    
    
  </ul>
</nav>
        );
    }
}
 
export default Page;