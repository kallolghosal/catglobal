import React, {Component} from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import vrutilogo from '../img/vrutti-logo.png';
import greenfnd from '../img/Green_foundation_logo.png';
import fughiologo from '../img/logo-fuzhio.png';
import upfront from '../img/150x150-–-1.svg';
import swasti from '../img/swasti-logo.png';
import cms from '../img/CMS.png';

export class Organisationsec extends Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              }]
          };
        return (
            <div className="fp-organisation">
                <Container>
                    <h3>The Catalyst Group of Organisations</h3>
                    <Slider {...settings}>
                        <div className="organisation-single wow fadeIn slick-slide slick-cloned">
                            <div className="organisation-logo-div-1"><img src={vrutilogo} alt="Vruti Logo" width={170} /></div>
                            <div className="organisation-details">
                                <p>A registered Society (not-for-profit), Vrutti is a Livelihood Impact Partner which enhances people&apos;s well-being through knowledge, innovation and transformative actions and brings about solutions at a scale that eliminate inequities and create wealth for the </p>
                                <p><a href="https://vruttiimpactcatalysts.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
                            </div>
                            <a href="https://vruttiimpactcatalysts.org/" target="_blank" rel="noopener noreferrer" className="organisation-readmore">READ MORE</a>
                        </div>
                        <div className="organisation-single wow fadeIn slick-slide slick-cloned">
                            <div className="organisation-logo-div-1"><img src={greenfnd} alt="Green Foundation Logo" width={170} /></div>
                            <div className="organisation-details">
                                <p>GREEN Foundation works toward a well-preserved, diverse ecosystem that will sustain the rural livelihoods of the present generation without eroding the resource base of the future. Our work to empower the small-scale and marginal farmers of India first began in 1994 with</p>
                                <p><a className="directions" href="https://greenfoundation.in/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
                            </div>
                            <a href="https://www.greenfoundation.in/" target="_blank" rel="noopener noreferrer" className="organisation-readmore">READ MORE</a>
                        </div>
                        <div className="organisation-single wow fadeIn slick-slide slick-cloned">
                            <div className="organisation-logo-div-1"><img src={fughiologo} alt="Fuzhio Logo" width={170} /></div>
                            <div className="organisation-details">
                                <p>Facilitating Market Access to Women and Smallholder Farmers and Marginalised Communities to Maximise Returns for their Products and Services. Fuzhio promotes Impact Products directly to customers on behalf of small farmers and vulnerable groups and </p>
                                <p><a className="directions" href="https://fuzhio.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
                            </div>
                            <a href="https://fuzhio.org/" target="_blank" rel="noopener noreferrer" className="organisation-readmore">READ MORE</a>
                        </div>
                        <div className="organisation-single wow fadeIn slick-slide slick-cloned">
                            <div className="organisation-logo-div-1"><img src={upfront} alt="Upfront Logo" width={170} /></div>
                            <div className="organisation-details">
                                <p>Upfront works with front line workers and the “systems” by changing mindsets, behaviours and practices; improving skills, financial security, processes and services; building agency, ensuring voices and choices; and establishing partnerships and collaborations.</p>
                                <p><a className="directions" href="https://upfront.global/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
                            </div>
                            <a href="https://upfront.global/" target="_blank" rel="noopener noreferrer" className="organisation-readmore">READ MORE</a>
                        </div>
                        <div className="organisation-single wow fadeIn slick-slide slick-cloned">
                            <div className="organisation-logo-div-1"><img src={swasti} alt="Swasti Logo" width={170} /></div>
                            <div className="organisation-details">
                                <p>A registered Society (not-for-profit), Swasti &mdash; The Health Catalyst &mdash; is a health resource centre.Which achieves public health outcomes for the marginalised, through the delivery of end-to-end solutions as well as short and long term support and facilitation,</p>
                                <p><a href="https://swastihc.org" className="directions" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
                            </div>
                            <a href="https://swastihc.org/" target="_blank" rel="noopener noreferrer" className="organisation-readmore">READ MORE</a>
                        </div>
                        <div className="organisation-single wow fadeIn slick-slide slick-cloned">
                            <div className="organisation-logo-div-1"><img src={cms} alt="CMS Logo" width={170} /></div>
                            <div className="organisation-details">
                                <p>A private limited organisation which specializes in providing consulting and professional services. CMS partners to create social impact, guaranteeing results through development solutions and investments. The organisation commits to sustainable development that </p>
                                <p><a className="directions" href="https://solvists.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
                            </div>
                            <a href="https://solvists.org/" target="_blank" rel="noopener noreferrer" className="organisation-readmore">READ MORE</a>
                        </div>
                    </Slider>
                </Container>
            </div>
        )
    }
}
export default Organisationsec;