import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import error from '../../asset/image/warning.svg'

class Wentwrong extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                           <img src={error} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Wentwrong;