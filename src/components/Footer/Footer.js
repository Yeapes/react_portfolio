import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AppURL from "../../restAPI/AppURL";
import RestClient from "../../restAPI/RestClient"; 
import {Link,NavLink} from 'react-router-dom';



class Footer extends Component {

    constructor(){
        super();
        this.state = {
            address: "..",
            email: "..",
            phone: "..",
            footer_credit: "..",
            facebook_link: "..",
            youtube_link: "..",
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.footer).then(response=>{
            this.setState({address:response[0]['address'],email:response[0]['email'],phone:response[0]['phone'],footer_credit:response[0]['footer_credit'],facebook_link:response[0]['facebook_link'],footer_credit:response[0]['youtube_link'],})
        })
    }

    render() {


        return (
            <Fragment>
                <Container fluid="true" className="footerBox py-5 text-center" >
                    <Row className="ml-5">
                       <Col lg={3} sm={12} md={6} className="text-justify">
                           <h2 className="ftitle">Follow Me</h2>
                            <a className="social" target="_blank" href={"//"+this.state.facebook_link}><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br />
                            <a className="social" target="_blank" href={"//"+this.state.youtube_link}><FontAwesomeIcon  icon={faYoutube} /> YouTube</a>
                            
                       </Col>
                       <Col lg={3} sm={12} md={6} className="text-justify" >
                            <h2 className="ftitle">Address</h2>
                            <p className="address">{this.state.address}</p>
                            <p className="address"><FontAwesomeIcon  icon={faEnvelope} /> {this.state.email}</p>
                            <p className="address"><FontAwesomeIcon  icon={faPhone} /> {this.state.phone}</p>
                       </Col>
                       <Col lg={3} sm={12} md={6} className="text-justify" >
                            <h2 className="ftitle">Information</h2>
                            <Link to="/about" className="footerLink" href="#">About Me</Link><br />
                            <Link to="/contact" className="footerLink" href="#">Contact Me</Link>
                       </Col>
                       <Col lg={3} sm={12} md={6} className="text-justify" >
                            <h2 className="ftitle">Legal</h2>
                            <Link className="footerLink" to="/Refund">Refund Policy</Link><br />
                            <Link className="footerLink" to="/terms">Terms And Condition</Link><br />
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>
                       </Col>
                    </Row>
                </Container>
                <Container fluid="true" className="text-center copyBg py-3">
                <a className="copy" href="#">{this.state.footer_credit}</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;