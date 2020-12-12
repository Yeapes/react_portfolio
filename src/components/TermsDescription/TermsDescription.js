import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppURL from "../../restAPI/AppURL";
import RestClient from "../../restAPI/RestClient";
import ReactHtmlParser from 'react-html-parser';

class TermsDescription extends Component {
    constructor(){
        super();
        this.state = {
            terms: "",
        }
    } 
    componentDidMount(){
        RestClient.getRequest(AppURL.informationEtc).then(response=>{
            this.setState({terms: response[0]['terms']})
        })
    }

    render() {
        return (
            <Fragment>
              <Container className="mt-5 mb-5">
                  <Row>
                      <Col sm={12} md={12} lg={12}>
                        { ReactHtmlParser(this.state.terms) } 
                      </Col>
                  </Row>
              </Container>
          </Fragment> 
        );
    }
}

export default TermsDescription;