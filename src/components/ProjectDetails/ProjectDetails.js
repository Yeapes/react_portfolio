import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
class ProjectDetails extends Component {


    constructor(props){
        super();
        this.state = {
            id: props.id,
            feature_img: "",
            title: "",
            short_des: "",
            project_feature: "",
            live_preview: "",
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.projectDetails+this.state.id).then(result=>{
            this.setState(
                {
                    feature_img: result[0]['feature_img'],
                    title: result[0]['title'],
                    short_des: result[0]['short_des'],
                    project_feature: result[0]['project_feature'],
                    live_preview: result[0]['live_preview'],
                }
            )
        }).catch(error=>{

        })
    }

    


    render() {
        return (
            <Fragment>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={6} sm={12} md={6}>
                            <img width="500" height="500" src={this.state.feature_img} />
                        </Col>
                        <Col lg={6} sm={12} md={6}>
                        <h2 className="ServiceTitle">{this.state.title}</h2>
                            <p className="serviceDes">
                           {this.state.short_des}
                             </p>
                             { ReactHtmlParser(this.state.project_feature) }
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;