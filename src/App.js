
import './App.css';
import {Route,Switch, useLocation} from "react-router-dom"
import Profile from "./components/SignupForm/profile"
import Social from "./components/SignupForm/social"
import Review from "./components/SignupForm/review"
import {FormContext} from "./components/SignupForm/formContext"
import { useContext } from 'react';

function App() {

  const location = useLocation();
  
  const {profileInfo,socialInfo} = useContext(FormContext)


  return (
    <div className="main-container">


      <div>
     {profileInfo ? <span className="profile label"><i class="ri-heart-fill fill" ></i>Profile</span> : <span className="profile label"> <i class="ri-heart-line"></i>Profile</span>} 
     {location.pathname == "/multiStep-form-react/social" && socialInfo ==""  ?    <span className="social label"><i class="ri-heart-line"></i>Social</span> : socialInfo?  <span className="social label"><i class="ri-heart-fill fill" ></i>Social</span>:  <span className="social label">Social</span> }
        <span className="review label">Review</span>
      </div>

      <div className="line">
      
      {location.pathname == "/multiStep-form-react/"  ? <div className="c1 circle active"></div> : <div className="c1 circle"></div>}   
      {location.pathname == "/multiStep-form-react/social"  ?   <div className="c2 circle active"></div>  : <div className="c2 circle"></div>}
      {location.pathname == "/multiStep-form-react/review"  ?  <div className="c3 circle active"></div> :  <div className="c3 circle"></div>}
      <hr />
      
      </div>
      
      <Switch>
        <Route exact path="/multiStep-form-react/"><Profile /></Route>
        <Route  path="/multiStep-form-react/social"><Social /></Route>
        <Route path="/multiStep-form-react/review"><Review /></Route>
      </Switch>

    </div>
  );
}

export default App;
