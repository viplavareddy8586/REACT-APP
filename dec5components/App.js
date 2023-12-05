
import './App.css';
import {Route} from 'react-router-dom';
import Home from './dec4components/home';
import About from './dec4components/about';
import Contact from './dec4components/contact';

import UnoNavbar from './dec4components/unonavbar';
import Example from './dec4components/example';
//import Loginform from './dec4components/loginform';

function App() {
  return (
    <div>
      <UnoNavbar/>
      <div>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        {/* <Route path='/' component={Loginform}/> */}
        <Route path='/' component={Example}/>
      </div>
    </div>
  );
}

export default App;
