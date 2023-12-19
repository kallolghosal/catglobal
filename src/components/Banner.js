import React, { Component } from "react";
import { Container, Button, Carousel } from 'react-bootstrap';
import logo from '../img/catalyst-global-logo.svg';

export class Banner extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <Container fluid className="banner-bg-1">
                        <div className="fp-hero">
                            <div className="fp-hero-center">
                                <img src={logo} alt="Catalyst Global Logo" />
                                <p>Catalyst Foundation is a social enterprise platform that seeks to promote health and wealth of vulnerable communities.</p>
                            </div>
                            <Button href="" className="hero-findbtn wow fadeInUp">FIND OUT MORE</Button>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="banner-bg-2">
                        <div className="fp-hero">
                            <div className="fp-hero-center">
                                <img src={logo} alt="Catalyst Global Logo" />
                                <p>Catalyst Foundation is a social enterprise platform that seeks to promote health and wealth of vulnerable communities.</p>
                            </div>
                            <Button href="" className="hero-findbtn wow fadeInUp">FIND OUT MORE</Button>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Banner;