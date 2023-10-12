import React from "react";
import Footer from '../components/mainfooter';
import ImpactBanner from "../components/ImpactBanner";
import '../App.css';
import Navreview from "../components/Navreview";
import WhatWeDo from "../components/whatwedo";

const Overview = () => {
    return (
        <>
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