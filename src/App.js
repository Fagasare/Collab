import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import './App.css';
import About from './Component/About';
import AllCategories from './Component/AllCategories';
import Dashboard from './Component/Dashboard';
import Faq from './Component/Faq';
import JobDetails from './Component/JobDetails';
import Jobs from './Component/Jobs';
import PostJob from './Component/PostJob';
import Pricing from './Component/Pricing';
import Register from './Component/Register';
import Blog from './Component/Blog';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import Categories from './Component/Categories';



function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Dashboard} />

        <Route path="/jobs" component={Jobs} />
        
        <Route path="/postjob" component={PostJob} />

        <Route path="/allcategories" component={AllCategories} />

        <Route path="/JobDetails" component={JobDetails} />

        <Route path="/Faq" component={Faq} />

        <Route path="/Pricing" component={Pricing}  />

        <Route path="/About" component={About} />

        <Route path="/Register" component={Register} />

        <Route path="/Blog" component={Blog} />

        <Route path="/Login" component={Login} />

        <Route path="/ForgotPassword" component={ForgotPassword} />

        <Route path="/Categories" component={Categories} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
