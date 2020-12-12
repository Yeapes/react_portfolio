import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import loader from '../../asset/image/load2.svg'

class Loader extends Component {
     
    render() {
        return (
          <Fragment>
              <Row>
                  <Col className="align-center text-center">
                        <img src={loader} />
                  </Col>
              </Row>
          </Fragment>  
        );
    }
}

export default Loader;