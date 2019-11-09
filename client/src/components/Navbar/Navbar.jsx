import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { FaUserCircle } from 'react-icons/fa';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';

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
				<Navbar color='faded' light>
					<div className='mr-auto'>
						<DropDownMenu>
							{(setOpen, isOpen) => (
								<FaUserCircle
									style={{ fontSize: '3rem', color: '#ddd' }}
									onClick={() => setOpen(!isOpen)}
								/>
							)}
						</DropDownMenu>
					</div>
					<NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href='#!'>Test link</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default myNavbar;
