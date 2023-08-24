import React from 'react';
import Navbar from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Infograph } from '../components/Infograph';
import { Organisationsec } from '../components/Organisation';
import { Constituents } from '../components/constituents';
import { Wwd } from '../components/Wwd';
import { Fpdetails } from '../components/fpdetails';
import { Contactus } from '../components/contactus';
import { Mainfooter } from '../components/mainfooter';

const Home = () => {
	return (
		<>
		<div className="main-header">
			<Navbar />
		</div>
		<Banner />
		<Infograph />
		<Organisationsec />
		<Wwd />
		<Constituents />
		<Fpdetails />
		<Contactus />
		<Mainfooter />
		</>
	)
};

export default Home;