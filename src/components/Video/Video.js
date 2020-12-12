import React, { Component, Fragment } from 'react';
import { Container, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "video-react/dist/video-react.css";
import {Player, BigPlayButton} from "video-react";
import AppURL from "../../restAPI/AppURL";
import RestClient from "../../restAPI/RestClient"; 


class Video extends Component {

    constructor(){
        super();
        this.state = {
            show: false,
            video_description: "",
            video_url: "",
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.videoHome).then(response=>{
            this.setState({video_description: response[0]['video_description'],video_url:response[0]['video_url']})
        })
    }

    modalShow = () => this.setState({show:true});
    modalClose = () => this.setState({show:false});
     
    render() {

        

        return (
            
            <Fragment>
                <Container className="text-center">
                    <Col className="videoCard my-5" lg={12} md={12} sm={12} >
                        <div>
                            <p className="videoTitle">How I Do</p>
                            <p className="videoDes">{this.state.video_description}</p>
                            <p><FontAwesomeIcon onClick={this.modalShow} className="videoIcon" icon={faPlayCircle} /></p>
                        </div>
                    </Col>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    
                    <Modal.Body>
                        <Player src={this.state.video_url}> 
                            <BigPlayButton position="center" /> 
                        </Player>
                       
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.modalClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
            </Fragment>       
        );
    }
}

export default Video;