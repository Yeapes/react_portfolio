import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid="true" className="summaryBanner marginTop5">
                   <div className="summaryOverlay"></div>
                <Container className="text-center" >
                    <Row>
                       <Col lg={8} md={6} sm={12}>
                           <Row className="marginMiddle">
                               <Col>
                                    <h1 className="countNumber"><CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => ( 
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Projects</h4>
                                <hr className="bg-white w-25" />                               
                                </Col>
                               <Col>
                               <h1 className="countNumber"><CountUp start={0} end={90}>
                                        {({ countUpRef, start }) => ( 
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Clients</h4>
                                    <hr className="bg-white w-25" />    
                               </Col>
                           </Row>
                       </Col>
                       
                       <Col lg={4} md={6} sm={12}>
                        <Card className="summaryCard">
                            <Card.Body>
                                <Card.Title className="cardTitle">How i Work</Card.Title>
                                <Card.Text>
                                    <p className="cardSubTitle"> <FontAwesomeIcon className="checkIcon"  icon={faCheckCircle} /> Requirement Gathering</p>
                                    <p className="cardSubTitle"> <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Coding Analysis</p>
                                    <p className="cardSubTitle"> <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> System Design</p>
                                    <p className="cardSubTitle"> <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Implementation</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                       </Col>
                    </Row>    
                </Container>       
                </Container>
            </Fragment>
        );
    }
}

export default Summary;