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
/* redux */
import { connect } from 'react-redux';
import { getAuthenticatedUser } from 'redux/actions/auth.actions';

if (localStorage.getItem('token')) {
	setAuthToken(localStorage.getItem('token'));
}

class App extends React.Component {
	componentDidMount() {
		console.log(this.props.token);
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

const mapStateToProps = state => ({
	user: state.auth.user,
	token: state.auth.token
});

export default connect(mapStateToProps, { getAuthenticatedUser })(
	App
);
