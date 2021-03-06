import React from 'react';
import { Link } from 'react-router-dom';
/* REACTSTRAP */
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem
} from 'reactstrap';
/* COMPONENTS */
import { FaUserCircle } from 'react-icons/fa';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';
/* REDUX */
import { connect } from 'react-redux';

class myNavbar extends React.Component {
	state = {
		collapsed: true
	};

	toggleNavbar = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	render() {
		return (
			<div>
				<Navbar color='faded' light className='position-relative'>
					<div className='mr-auto'>
						<DropDownMenu>
							{(setOpen, isOpen) => (
								<FaUserCircle
									style={{ fontSize: '3rem', color: '#ddd' }}
									onClick={() => setOpen(!isOpen)}
								/>
							)}
						</DropDownMenu>
						{this.props.isAuthenticated && this.props.user && (
							<span className='ml-2' style={{ fontSize: '.5rem' }}>
								{this.props.user.email}
							</span>
						)}
					</div>
					<NavbarToggler
						onClick={this.toggleNavbar}
						className='mr-2'
					/>
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar onClick={this.toggleNavbar}>
							<NavItem>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</NavItem>
							<NavItem>
								<Link className='nav-link' to='/cities'>
									Cities
								</Link>
							</NavItem>
							<NavItem>
								<Link className='nav-link' to='/create-new-account'>
									Create new Account
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated,
	user: state.user.user
});

export default connect(mapStateToProps)(myNavbar);
