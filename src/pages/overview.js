import React from "react";
import Navbar from '../components/Navbar';
import Contactus from '../components/contactus';
import Footer from '../components/mainfooter';
import ImpactBanner from "../components/ImpactBanner";
import '../App.css';

const Overview = () => {
    return (
        <>
        <div className="main-header" style={{ backgroundColor: '#000' }}>
			<Navbar />
		</div>
        <ImpactBanner />
        <Contactus />
        <Footer />
        </>
    );
};

export default Overview;