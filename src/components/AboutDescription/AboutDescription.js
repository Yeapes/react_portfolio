import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppURL from "../../restAPI/AppURL";
import RestClient from "../../restAPI/RestClient";
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
import Warning from '../Wentwrong/Wentwrong';
class AboutDescription extends Component {
    

    constructor(){
        super();
        this.state = {
            about: "",
            loader: true,
            error: false,
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.informationEtc).then(response=>{

            if(response == null){
                this.setState({loader: false,error: true})
            }else{
                this.setState({about: response[0]['about'],loader: false})
            } 
            
        }).catch(error=>{
            this.setState({loader: false,error: true})
        })
    }

    render() {
       if(this.state.loader == true && this.state.error == false){
          return <Loader></Loader>
       }else if(this.state.loader == false && this.state.error == false){
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        { ReactHtmlParser(this.state.about) }
                        </Col>
                    </Row>
                </Container>
            </Fragment>  
          );
       }else if(this.state.error == true){
            return <Warning></Warning>
       }
    }
}

export default AboutDescription;