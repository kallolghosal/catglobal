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
import { MetaTags } from 'react-meta-tags';

const Home = () => {
	return (
		<>
		<MetaTags>
            <title>Catalyst Global | Home</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
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