import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class TopPageBanner extends Component {
    
    render() {
        return (
            <Fragment>
                <Container fluid="true" className="topPageBanner">
                   <div className="topPageBannerOverlay"></div>
                <Container>
                    <Row>
                       <Col className="bannerPageContent text-center">
        <h1 className="PageBannertitle">{this.props.title}</h1>         
                       </Col> 
                    </Row>    
                </Container>       
                </Container>
            </Fragment>
        );
    }
}

export default TopPageBanner;