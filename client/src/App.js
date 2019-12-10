import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import './App.css';
import { setAuthToken } from './axios/axios.config';
/* pages */
import Cities from 'components/pages/Cities';
import LandingPage from 'components/pages/LandingPage';
import Login from 'components/pages/Login';
import CreateNewAccount from 'components/pages/CreateNewAccount';
import Mytineraries from 'components/pages/Mytineraries';
/* components */
import Navbar from 'components/Navbar/Navbar';

function App() {
	// if (localStorage.getItem('token')) {
	// 	const token = JSON.parse(localStorage.getItem('token'));
	// 	console.log('from localStorage');
	// 	console.log(token);
	// }

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

export default App;
