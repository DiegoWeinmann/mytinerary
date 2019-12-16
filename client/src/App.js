import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import './App.css';
import { setAuthToken } from './axios/axios.config';
/* PAGES */
import Cities from 'components/pages/Cities';
import LandingPage from 'components/pages/LandingPage';
import Login from 'components/pages/Login';
import CreateNewAccount from 'components/pages/CreateNewAccount';
import Mytineraries from 'components/pages/Mytineraries';
/* COMPONENTS */
import Navbar from 'components/Navbar/Navbar';
/* REDUX */
import { connect } from 'react-redux';
import { getAuthenticatedUser } from 'redux/actions/user.actions';

if (localStorage.getItem('token')) {
	setAuthToken(localStorage.getItem('token'));
}

class App extends React.Component {
	componentDidMount() {
		this.props.getAuthenticatedUser();
	}
	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/cities/:id' component={Mytineraries} />
					<Route exact path='/cities' component={Cities} />
					<Route path='/login' component={Login} />
					<Route
						path='/create-new-account'
						component={CreateNewAccount}
					/>
				</Switch>
			</Router>
		);
	}
}

export default connect(null, { getAuthenticatedUser })(App);
