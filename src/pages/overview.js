import React from "react";
import Footer from '../components/mainfooter';
import ImpactBanner from "../components/ImpactBanner";
import '../App.css';
import Navreview from "../components/Navreview";
import WhatWeDo from "../components/whatwedo";
import { MetaTags } from "react-meta-tags";
import Meta from "../components/meta";

const Overview = () => {
    const title = 'Title';
	const desc = 'Description';
	const url = 'URL';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';

    return (
        <>
        <Meta title={title} desc={desc} url={url} banner={banner} />
        <div className="main-header" style={{ backgroundColor: '#000' }}>
			<Navreview />
		</div>
        <ImpactBanner />
        <WhatWeDo />
        <Footer />
        </>
    );
};

export default Overview;