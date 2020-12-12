import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import Loader from '../Loader/Loader';
class Portfolio extends Component {
    constructor(){
        super();
        this.state = {
            allProjects: [],
            loader: true,
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.allProjects).then(response=>{
            this.setState({allProjects: response,loader: false})
        })
    }

    render() {

        if(this.state.loader == true){
            return <Loader></Loader>
        }else{
            const allProjects = this.state.allProjects.map(project=>{
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
                    <Container className="text-center mt-5"> 
                        <Row>
    
                          {allProjects}
                             
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        
       
    }
}

export default Portfolio;