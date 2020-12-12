import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppURL from "../../restAPI/AppURL";
import RestClient from "../../restAPI/RestClient";
import ReactHtmlParser from 'react-html-parser';
class RefundSection extends Component {


    constructor(){
        super();
        this.state = {
            refund: "",
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.informationEtc).then(response=>{
            this.setState({refund: response[0]['refund']})
        })
    }

    render() {
        return (
            <Fragment>
              <Container className="mt-5 mb-5">
                  <Row>
                      <Col sm={12} md={12} lg={12}>
                      { ReactHtmlParser(this.state.refund) }
                      </Col>
                  </Row>
              </Container>
          </Fragment> 
        );
    }
}

export default RefundSection;