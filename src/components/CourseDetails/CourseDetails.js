import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HtmlParser from 'react-html-parser';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import Player from 'video-react/lib/components/Player';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
class CourseDetails extends Component {

    constructor(props){
       super(props);
        this.state = {
            id: props.id,
            short_des: "",
            long_des: "",
            total_lecture: "",
            total_student: "",
            all_skill: "",
            video_url: "",
            course_link: "",
        }

    }

    componentDidMount(){
        RestClient.getRequest(AppURL.courseDetails+this.state.id).then(result=>{

            
            this.setState({
                short_des: result[0]['short_des'],
                long_des: result[0]['long_des'],
                total_lecture: result[0]['total_lecture'],
                short_des: result[0]['short_des'],
                total_student: result[0]['total_student'],
                all_skill: result[0]['all_skill'],
                video_url: result[0]['video_url'], 
                course_link: result[0]['course_link'], 
            })
        }).catch(error =>{

        })
    }

    render() {
        return (
            <Fragment>
            <Container fluid="true" className="topPageBanner">
               <div className="topPageBannerOverlay">
                <Container className="mt-20">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                        <h4 className="courseHeading">{this.state.short_des}</h4>
                            <h5 className="courseSubHeading">Total Lecture={this.state.total_lecture}</h5>
                            <h5 className="courseSubHeading">Total Student={this.state.total_student}</h5>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <p className="courseDes">{this.state.long_des}</p>
                        </Col>
                    </Row>    
                </Container>  
               </div> 
            </Container>
            <Container className="mt-5 mb-5">
                    <Row>
                        <Col sm={12} lg={6} md={6}>
                            <h1 className="cardTitle">Skill You Get</h1>
                                { HtmlParser(this.state.all_skill) }
                            <Button variant="primary">More</Button>
                        </Col>    
                        <Col sm={12} lg={6} md={6}>
                            <Player src={this.state.video_url}> 
                                    <BigPlayButton position="center" /> 
                            </Player>
                        </Col>  
                    </Row>  
            </Container>    
        </Fragment>  
        );
    }
}

export default CourseDetails;