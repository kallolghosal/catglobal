import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import thought from '../img/thought_leadership.png';
import Synergy from '../img/build_synergies.png';
import Action from '../img/catalyse_action.png';
import Green from '../img/GREEN-Foundation.png';
import Swasti from '../img/Swasti.png';
import Vrotti from '../img/Vrotti.png';
import CAC from '../img/CAC-logo-02.png';
import Upfront from '../img/Upfront.png';
import Aparna from '../img/aparna_sanjay.png';
import Catherine from '../img/cathrine_cove.png';
import Angela from '../img/angela.png';
import Sharma from '../img/sharma.png';
import Raghu from '../img/ragunathan.png';
import Shiv from '../img/shivkumar.png';

export default class WhatWeDo extends Component {
    render () {
        return (
            <>
            <Container style={{paddingTop:'40px',paddingBottom:'60px'}} className="p-4">
                <h1 style={{textAlign:'center',paddingBottom:'40px'}}>What We Do</h1>
                <p style={{textAlign:'center',marginBottom:'40px'}}>The common threads across all our work, be it on health, climate, livelihoods, or social protection, have been:</p>
                <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img src={thought} alt="Thought Leadership" style={{width:'100%', height:'auto'}} />
                    </Col>
                    <Col md={6}>
                        <div style={{display:'flex', alignItems:'center',height:'100%'}}>
                            <p><h3>Thought Leadership</h3>As thought leaders, we build knowledge and perspectives and generate learning. Our multi- and cross-disciplinary experience affords us the ability to draw, process, and share insights across themes and sectors, enriching solutions through diverse lenses.</p>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={6}>
                        <div style={{display:'flex', alignItems:'center',height:'100%'}}>
                            <p><h3>Build Synergies</h3>We understand that transformation and scale are not possible without partnerships and collaborations. We bridge the worlds of communities, practitioners, thinkers, and investors, and of programme and policy, bringing these together for scale and sustainability.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <img src={Synergy} alt="Thought Leadership" style={{width:'100%', height:'auto'}} />
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img src={Action} alt="Thought Leadership" style={{width:'100%', height:'auto'}} />
                    </Col>
                    <Col md={6}>
                        <div style={{display:'flex', alignItems:'center',height:'100%'}}>
                            <p><h3>Catalyse Action</h3>Ethics, integrity, and execution excellence are the pathways towards action that demonstrate quality and dignity for communities. We provide mechanisms for partners in the social sector to remain firmly on these pathways.</p>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div style={{marginTop:'60px'}}>
                            <p>ICF strives to bring this thought leadership and impact creation to the attention of our global stakeholders, be they foundations and other donors, governments, or diaspora populations.</p>
                            <p>Through our existing work and collaborations, ICF will impact the health and wealth of vulnerable communities globally.</p>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
            <Container fluid className="globeBg">
                <h1>Where we work</h1>
                <p>We work across the domains of livelihood, health, and Wellbeing for the Workforce with deep experience in policy, research, implementation, monitoring, capacity building, strategy, and documentation. We have been working across India and have a global footprint in 25 countries.</p>
                <Container>
                    <Row>
                        <Col><a href="https://greenfoundation.in" target="_blank"><img src={Green} alt="Green Foundation" /></a></Col>
                        <Col><a href="https://swasti.org" target="_blank"><img src={Swasti} alt="Swasti" /></a></Col>
                        <Col><a href="https://vruttiimpactcatalysts.org/" target="_blank"><img src={Vrotti} alt="Vrotti" /></a></Col>
                        <Col><a href="https://communityactioncollab.org/" target="_blank"><img src={CAC} alt="CAC" /></a></Col>
                        <Col><a href="https://upfront.global/" target="_blank"><img src={Upfront} alt="Upfront" /></a></Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="directorsBox">
                <h1>Board of Directors</h1>
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src={Aparna} alt="Aparna Sanjay" />
                            <h2>Aparna Sanjay</h2>
                            <p>Aparna leads the US operations of the Catalyst Group of organisations and is responsible for partnerships and fundraising with key stakeholders.</p>
                            <Button>Know more</Button>
                        </Col>
                        <Col md={4} >
                            <img src={Catherine} alt="Catherine Cove" />
                            <h2>Catherine Cove</h2>
                            <p>Catherine Cove is the Secretary of the Impact Catalyst Foundation. She is a healthcare consultant and second-year MBA candidate at the University of Chicago Booth School of Business.</p>
                            <Button>Know more</Button>
                        </Col>
                        <Col md={4}>
                            <img src={Angela} alt="Angela Choudhuri" />
                            <h2>Angela Choudhuri</h2>
                            <p>Dr. Angela Chaudhuri is a public health leader with over 2 decades of experience leading and mentoring global programs that translate the science of public health into meaningful community action for equitable change.</p>
                            <Button>Know more</Button>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <img src={Sharma} alt="Sharma Karkal" />
                            <h2>Sharma Karkal</h2>
                            <p>Shama is a social impact professional with 25+ years of experience; her core expertise has been working on community systems strengthening with a focus on marginalised communities.</p>
                            <Button>Know more</Button>
                        </Col>
                        <Col md={4} >
                            <img src={Raghu} alt="Raghunathan N" />
                            <h2>Raghunathan N</h2>
                            <p>Co-founder of The Catalyst Group of Organisations, a strong proponent of building evidence and innovations to guide development. He has 7 Peer-reviewed/published papers to his name.</p>
                            <Button>Know more</Button>
                        </Col>
                        <Col md={4}>
                            <img src={Shiv} alt="Shiv Kumar" />
                            <h2>Shiv Kumar</h2>
                            <p>Co-founder of The Catalyst group and Chief Integrator of the Community Action Collab, Shiv is a social investor who is passionate about solving complex social problems and improving the health & wealth of vulnerable communities.</p>
                            <Button>Know more</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </>
        )
    }
}