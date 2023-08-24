import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class Mainfooter extends Component {
    render () {
        return (
            <div className="main-footer">
                <Container>
                    <p>
                    &copy; 2019-20 Catalysts Foundation - All Rights Reserved. | Terms &amp; Conditions | Disclaimer
                    </p>
                </Container>
            </div>
        )
    }
}
export default Mainfooter;