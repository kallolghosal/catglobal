import React, { Component } from "react";
import { Container, Button } from 'react-bootstrap';
import logo from '../img/catalyst-global-logo.svg';

export class Banner extends Component {
    render () {
        return (
            <Container fluid style={ { margin:0, padding:0 } }>
                <div className="fp-hero">
                    <div className="bx-wrapper"></div>
                    <div className="fp-hero-center">
                        <img src={logo} alt="Catalyst Global Logo" />
                        <p>
                        Catalyst Foundation is a social enterprise platform that seeks to promote health and wealth of vulnerable communities.
                        </p>
                    </div>
                    <Button href="" className="hero-findbtn wow fadeInUp">FIND OUT MORE</Button>
                </div>
            </Container>
        )
    }
}
export default Banner;