import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar  from './components/navbar.component';
import ResolutionList  from './components/resolution-list.component';
import EditResolution  from './components/edit-resolution.component';
import CreateResolution  from './components/create-resolution.component';
import CreateUser  from './components/create-user.component';



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/' exact component={ResolutionList} />
        <Route path='/edit/:id'  component={EditResolution} />
        <Route path='/create'  component={CreateResolution} />
        <Route path='/user'  component={CreateUser} />
      </div>
    </Router>
  )
}

export default App;