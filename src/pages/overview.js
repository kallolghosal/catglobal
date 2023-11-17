import React from "react";
import OverviewBanner from "../components/OverviewBanner";
import '../App.css';
import Meta from "../components/meta";
import CmsBlock from "../components/cmsblock";
import SwastiBlock from "../components/swastiblock";
import VruttiBlock from "../components/vruttiblc";
import FuzhioBlock from "../components/fuzhioblc";
import GreenFnBlock from "../components/greenFnBlock";

const Overview = () => {
    const title = 'Catalyst Global Overview';
	const desc = 'Description';
	const url = 'URL';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';

    return (
        <>
        <Meta title={title} desc={desc} url={url} banner={banner} />
        <OverviewBanner />
        <CmsBlock />
        <SwastiBlock />
        <VruttiBlock />
        <FuzhioBlock />
        <GreenFnBlock />
        </>
    );
};

export default Overview;