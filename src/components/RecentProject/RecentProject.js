import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

class RecentProject extends Component {

    constructor(){
        super();
        this.state = {
            recentProjets: [],
            loader: true,
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.project3).then(response=>{
            this.setState({recentProjets: response,loader: false})
        })
    }

   
    render() {

        if(this.state.loader == true){
           return <Loader></Loader>
        }else{
            const recentProjets = this.state.recentProjets; 
            const projects = recentProjets.map(project =>{
                return <Col sm={12} md={6} lg={4} >
                <Card className="projectCard" >
                <Card.Img variant="top" src={project.project_img} alt="Project" />
                <Card.Body>
            <Card.Title className="projectCardTitle" >{project.title}</Card.Title>
                    <Card.Text className="projectCardDes">
                    {project.project_feature}
                    </Card.Text>
                    <Button variant="primary"><Link className="link-style" to={"/details/"+project.id}>Details</Link></Button>
                </Card.Body>
                </Card>
            </Col>
            })
    
            return (
                <Fragment>
                    <Container className="text-center">
                    <h2 className="serviceHeading py-5">Recent Projects</h2>
                        <Row>
                            
                             {projects}
                             
                        </Row>
                    </Container>
                </Fragment>
            );
        }


        
    }
}

export default RecentProject;