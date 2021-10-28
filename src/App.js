import AboutUs from './AboutUs';
import './App.css';
import Contact from './Contact';
import First from './First';
import Navigate from './Layout/Navigate';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Companies from './Companies';
import SignUp from './SignUp';

function App() {
  return (
    // <div className="App">
    //   <Navigate></Navigate>
    //   <h1>HELLO WORLD</h1>
    //   <First></First>
    //   <Contact></Contact>
    //   <AboutUs></AboutUs>
    // </div>
    <Router>
       <div className="App">
         <Navigate></Navigate>
        <Switch>
          <Route exact path="/First" component={First}></Route>
          <Route exact path="/AboutUs" component={AboutUs}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/Companies" component={Companies}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
        </Switch>
       </div>
    </Router>
  );
}

export default App;
