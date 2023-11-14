import React from "react";
import Footer from '../components/mainfooter';
import ImpactBanner from "../components/ImpactBanner";
import '../App.css';
import Navreview from "../components/Navreview";
import WhatWeDo from "../components/whatwedo";
import { MetaTags } from "react-meta-tags";

const Overview = () => {
    return (
        <>
        <MetaTags>
            <title>Catalyst Global | Overview</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
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