import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import AppURL from "../../restAPI/AppURL";
import RestClient from "../../restAPI/RestClient"; 

class ContactSection extends Component { 

    constructor(){
        super();
        this.state = {
            address: "..",
            email: "..",
            phone: "..", 
            
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.footer).then(response=>{


            this.setState({address:response[0]['address'],email:response[0]['email'],phone:response[0]['phone'],})
        })
    }

    sendContact(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let jsonData = {user_name:name,email:email,message:message};

        RestClient.postRequest(AppURL.contactSend,JSON.stringify(jsonData)).then(response=>{
            alert(response);
        }).catch(error=>{
            console.log('error')
        })
    }


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control id="name" type="text" />
                               
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" type="email" />
                               
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control id="message" as="textarea" rows="3" />
                               
                            </Form.Group>
 
                            <Button onClick={this.sendContact} variant="primary" id="submit">
                                Send Us
                            </Button>
                        </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="ftitle">Address</h2>
                            <p className="address">{this.state.address}</p>
                            <p className="address"><FontAwesomeIcon  icon={faEnvelope} /> {this.state.email}</p>
                            <p className="address"><FontAwesomeIcon  icon={faPhone} /> {this.state.phone}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;