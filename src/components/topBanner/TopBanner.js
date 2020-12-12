import React,{Fragment,Component} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import RestClient from '../../restAPI/RestClient';
import AppURL from '../../restAPI/AppURL';
import axios from 'axios';
import Loader from '../Loader/Loader';
class TopBanner extends Component{

    constructor(){
       super();
       this.state = {
           title: "",
           subtitle: "",
           loader: true,
       }

    }
 
    componentDidMount(){
        RestClient.getRequest(AppURL.homeTitle).then(result => {
            this.setState({title: result[0]['home_title'],subtitle: result[0]['home_subtitle'],loader: false})
        }).catch(error=>{
            this.setState({title: '????', subtitle: '????'})
        })
    }

    render(){

        if(this.state.loader == true){
            return <Loader></Loader>
        }else{
            return(
                <Fragment>
                    <Container fluid="true" className="topBanner">
                       <div className="topBannerOverlay"></div>
                    <Container>
                        <Row>
                           <Col className="bannerContent text-center">
                                <h1 className="title">{this.state.title}</h1>
                                <h4 className="post">{this.state.subtitle}</h4>
                                <Button variant="primary">More Info</Button>
                           </Col> 
                        </Row>    
                    </Container>       
                    </Container>
                </Fragment>
            );
        }

        
    }
}

export default TopBanner;
