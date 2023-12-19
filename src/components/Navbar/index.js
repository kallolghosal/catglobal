import React, { useState, useEffect } from 'react';
import logo from '../../img/catalyst-global-logo.svg';
import { Nav, NavLink, Bars, NavMenu, } from './NavbarElements';

const Navbar = () => {

	const [navbar, setNavbar] = useState(false)
	const [navbarLogo, setNavbarLogo] = useState(false)

	const changeBackground = () => {
		//console.log(window.scrollY)
		if (window.scrollY >= 20) {
		  setNavbar(true)
		} else {
		  setNavbar(false)
		}
	  }
	
	  useEffect(() => {
		changeBackground()
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground)
	  })
	
	  //logo scroll function
	  const changeLogo = () => {
		if (window.scrollY >= 20) {
		  setNavbarLogo(logo)
		} else {
			setNavbarLogo(false)
		}
	  }
	
	  useEffect(() => {
		changeLogo()
		// adding the event when scroll change Logo
		window.addEventListener("scroll", changeLogo)
	  })

	return (
		<Nav className={navbar ? "navbar colorChange" : "navbar"}>
			<Bars />
			<a href='/'><img src={logo} alt="Catalyst Global Logo" /></a>
			<NavMenu>
				<NavLink to='/'>
					Home
				</NavLink>
				<NavLink to='/organisation'>
					Organisation
				</NavLink>
				<NavLink to='/partners'>
					Partners
				</NavLink>
				<NavLink to='https://communityactioncollab.org' target='_blank'>
					Community Action Collab
				</NavLink>
			</NavMenu>
		</Nav>
	);
};

export default Navbar;
