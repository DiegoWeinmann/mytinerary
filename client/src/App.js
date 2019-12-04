import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
/* pages */
import Cities from 'components/pages/Cities';
import { LandingPageSecond as LandingPage } from 'components/pages/LandingPage';
import Login from 'components/pages/Login';
import CreateNewAccount from 'components/pages/CreateNewAccount';
import Mytineraries from 'components/pages/Mytineraries';
/* components */
import Navbar from 'components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/cities/:id' component={Mytineraries} />
        <Route exact path='/cities' component={Cities} />
        <Route path='/login' component={Login} />
        <Route path='/create-new-account' component={CreateNewAccount} />
      </Switch>
    </Router>
  );
}

export default App;
