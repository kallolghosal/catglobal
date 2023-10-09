import React, { useState, useEffect } from 'react';
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements';
import { Button } from 'react-bootstrap';

const Navreview = () => {

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

	return (
		<Nav className={navbar ? "navbar colorChange" : "navbar"}>
			<Bars />
			<NavMenu>
				<NavLink to='/'>
					WHO ARE WE
				</NavLink>
				<NavLink to='/organisation'>
					WHAT WE DO
				</NavLink>
				<NavLink to='/partners'>
					WHERE WE WORK
				</NavLink>
				<NavLink to='https://communityactioncollab.org' target='_blank'>
					OUR TEAM
				</NavLink>
				<NavLink to='/contact'>
					<Button>Conatct Us</Button>
				</NavLink>
			</NavMenu>
		</Nav>
	);
};

export default Navreview;
