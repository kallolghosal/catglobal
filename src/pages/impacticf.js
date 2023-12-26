import React from "react";
import Footer from '../components/mainfooter';
import ImpactBanner from "../components/ImpactBanner";
import '../App.css';
import Navreview from "../components/Navreview";
import WhatWeDo from "../components/whatwedo";
import Meta from "../components/meta";

const Impacticf = () => {
    const title = 'Title';
	const desc = 'Description';
	const url = 'URL';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';
    const keywords = 'social development,Social inequities,vulnerable population,enterprise social network';

    return (
        <>
        <Meta title={title} desc={desc} url={url} banner={banner} keyword={keywords} />
        <div className="main-header" style={{ backgroundColor: '#000' }}>
			<Navreview />
		</div>
        <ImpactBanner />
        <WhatWeDo />
        <Footer />
        </>
    );
};

export default Impacticf;