import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { GiHamburgerMenu } from 'react-icons/gi';
import classes from './Navbar.module.css';

const NavbarPrimary = () => {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		setInView(true);
	}, []);

	return (
		<Navbar
			style={{}}
			fixed='top'
			expand='lg'
			className={`shadow-sm p-2 mb-5 bg-white ${
				inView ? classes.navbarShow : classes.navbarHide
			}`}
		>
			<Container>
				<Navbar.Brand href='/' className={classes.brand}>
					Petko.dev
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className={classes.links}
				>
					<i className={classes.links}>
						<GiHamburgerMenu />
					</i>
				</Navbar.Toggle>
				<Navbar.Collapse
					id='basic-navbar-nav'
					className={`${classes['links']}`}
				>
					<Nav className='ms-auto'>
						<Nav.Link className={classes['links']} href='#banner'>
							Home
						</Nav.Link>
						<Nav.Link className={classes['links']} href='#about'>
							About
						</Nav.Link>
						<Nav.Link className={classes['links']} href='#projects'>
							Projects
						</Nav.Link>
						<Nav.Link className={classes['links']} href='#contacts'>
							Contacts
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarPrimary;
