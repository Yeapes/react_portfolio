import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';

class Courses extends Component {

    constructor(){
        super();
        this.state = {
            courseHome: [],
            loader: true,
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.courseHome).then(response=>{
            this.setState({courseHome: response,loader: false});
        })
    }

    
    render() {


        if(this.state.loader == true){
            return <Loader></Loader>
        }else{
            const courseHome = this.state.courseHome.map(course=>{
                return <Col className="py-4" lg={6} md={12} sm={12}>
                <Row>
                   <Col lg={6} md={6} sm={12}>
                        <img className="courseImg" src={course.small_img} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h5 className="courseTitle">{course.short_title}</h5>
                        <p className="courseDes">{course.short_des}</p>
                        <Link to={"/courseDetails/"+course.id} className="courseDetails">Details</Link>
                    </Col>
                    
                </Row>
            </Col>
            }) 
    
            return (
                <Fragment>
                    <Container>
                        <h2 className="text-center courseHeading text-primary py-5 px-5">Our Courses</h2>
                        <Row>
                            {courseHome}
     
                            
                        </Row>
                    </Container>
                </Fragment>        
            );
        }

        
    }
}

export default Courses;