import React from "react";
import OverviewBanner from "../components/OverviewBanner";
import '../App.css';
import Meta from "../components/meta";
import CmsBlock from "../components/cmsblock";
import SwastiBlock from "../components/swastiblock";
import VruttiBlock from "../components/vruttiblc";
import FuzhioBlock from "../components/fuzhioblc";
import GreenFnBlock from "../components/greenFnBlock";
import UpfrontBlock from "../components/upfrontblc";
import CatalystBlock from "../components/catalystblc";
import Ecosystem from "../components/ecosystem";
import CACollab from "../components/cacollab";
import Overviewmenu from "../components/overviewmenu";
import { Helmet } from "react-helmet";

const Overview = () => {
    const title = 'Catalyst Global Overview';
	const desc = 'Description';
	const url = 'URL';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';
    const keywords = 'social development,Social inequities,vulnerable population,enterprise social network';

    const overviewSchema = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "catalysts global",
        "url": "https://catalysts.global/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://catalysts.global/overview{search_term_string}https://catalysts.global/",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
        <Helmet>
            <link rel="canonical" href="https://catalysts.global/overview" />
        </Helmet>
        <script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
			__html: JSON.stringify(overviewSchema),
			}}
		/>
        <Meta title={title} desc={desc} url={url} banner={banner} keyword={keywords} />
        <Overviewmenu />
        <OverviewBanner />
        <CmsBlock />
        <SwastiBlock />
        <VruttiBlock />
        <FuzhioBlock />
        <GreenFnBlock />
        <UpfrontBlock />
        <CatalystBlock />
        <Ecosystem />
        <CACollab />
        </>
    );
};

export default Overview;