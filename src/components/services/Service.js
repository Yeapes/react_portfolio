import React,{Component,Fragment} from 'react';
import {Row,Col, Container} from 'react-bootstrap';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import graphics from '../../asset/image/graphics.svg';
import mobile from '../../asset/image/mobile.svg';
import web from '../../asset/image/web.svg';
import Loader from '../Loader/Loader';
class Service extends Component{

    constructor(){
        super(); 
        this.state = {
            myservices: [],
            loader: true,
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppURL.service).then(response =>{
            this.setState({myservices:response,loader:false})
        })
    }


    render(){


        if(this.state.loader == true){
            return(
                <Loader></Loader>
            );
        }else{
            const myservices = this.state.myservices; 
            const myservice = myservices.map(service =>{
                return <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={service.service_logo} alt="Services" />
                            <h2 className="ServiceTitle">{service.service_name}</h2>
                            <p className="serviceDes">{service.service_des}</p>
                        </div>
                        </Col>
            });
    
            return(
                <Fragment> 
                    <Container  className="text-center"> 
                        <h2 className="serviceHeading">My Services</h2>
                        <Row>
                            {myservice}
                        </Row>
                        
                    </Container>
                </Fragment>
            );
        }


        
    }
}


export default Service; 