import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class Mainfooter extends Component {

    render () {
        return (
            <div className="main-footer">
                <Container>
                    <p>
                    &copy; {(new Date().getFullYear())} Catalysts Foundation - All Rights Reserved. | Terms &amp; Conditions | Disclaimer
                    </p>
                </Container>
            </div>
        )
    }
}
export default Mainfooter;