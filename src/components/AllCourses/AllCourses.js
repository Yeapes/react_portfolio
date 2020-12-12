import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import Loader from '../Loader/Loader';
import Warning from '../Wentwrong/Wentwrong';
class AllCourses extends Component {


    constructor(){
        super();
        this.state = {
            courseHome: [],
            loader: true,
            error: false,
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.courseAll).then(response=>{
            if(response == null){
                this.setState({loader: false,error: true})
            }else{
                this.setState({courseHome: response, loader: false});
            }

            
        })
    }

     
    render() {

        if(this.state.loader == true && this.state.error == false){
            return <Loader></Loader>
        }else if(this.state.loader == false && this.state.error == false){
            
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
                    <Row>
                       {courseHome}

                         
                    </Row>
                </Container>
            </Fragment> 
             );
        }else if(this.state.error == true){
            return <Warning></Warning>
       }


        
    }
}

export default AllCourses;