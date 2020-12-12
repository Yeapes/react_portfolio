import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import ReactHtmlParser from 'react-html-parser';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';
import Loader from '../Loader/Loader';
import Warning from '../Wentwrong/Wentwrong';

class Analysis extends Component {

    constructor(){
        super();
        this.state = {
            data:[],
            desc:'...',
            loader: true,
            error: false,
        }
    }



    componentDidMount(){
        RestClient.getRequest(AppURL.chartData).then(response=>{

            if(response == null){
                this.setState({loader: false,error: true})
            }else{
                this.setState({data: response,loader: false})
            }
            
        })

        RestClient.getRequest(AppURL.techDes).then(response=>{
            if(response == null){
                this.setState({loader: false,error: true})
            }else{
                this.setState({desc: response[0]['technology_des'],loader: false})
            }
            
        })
    }
   
    render() {

        if(this.state.loader == true && this.state.error == false){
            return (
                <Loader></Loader>
            )
        }else if(this.state.loader == false && this.state.error == false){
            var blue = 'rgba(0,0,255,0.8)'
            return (
                <Fragment>
                    <Container>
                        <h1 className="serviceHeading py-5 text-center">Technology Used</h1>
                        <Row>
                            <Col style={{width:'100%', height: '300px'}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="technology"></XAxis>
                                        <Tooltip></Tooltip>
                                        <Bar dataKey="projects" fill={blue}></Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
    
                            <p className="analysisDes text-justify"> 
                                { ReactHtmlParser(this.state.desc) }
                            </p>
                            
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

export default Analysis;




