import logo from './logo.svg';
import './App.css';
import First from './dec2-components/first';
import {Route} from 'react-router-dom';
import Contact from './dec2-components/contact';
import Home from './dec2-components/home';
import Enquiry from './dec2-components/enquiry';
import Course from './dec2-components/course';
function App() {
  return (
    <div>
      <First/>
      <div className='content'>
        <Route path='/contact' component={Contact}/>
        <Route path='/home' component={Home}/>
        <Route path='/enquiry' component={Enquiry}/>
        <Route path='/course' component={Course}/>
      </div>
    </div>
  );
}

export default App;
