import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation from "./Navigation/Navigation";

import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./SignUp/Signup";
import AddNewPost from "./AddNewPost/AddNewPost";


function App() {
  return (
    <div className="App">

        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Signin}/>
                <Route path="/addpost" exact component={AddNewPost}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/home" exact component={Home}/>
                <Route path='/signup' exact component={Signup}/>
            </Switch>
      </Router>


    </div>
  );
}

export default App;
