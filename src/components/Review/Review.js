import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import AppURL from '../../restAPI/AppURL';
import RestClient from '../../restAPI/RestClient';


class Review extends Component {

    constructor(){
      super();
      this.state = {
        reviews: [],
      }
    }

      componentDidMount(){
        RestClient.getRequest(AppURL.clientReview).then(response=>{
          this.setState({reviews: response})
        })
      }
    
    render() {

      const reviews = this.state.reviews.map(review=>{
        return  <div>
        <img className="reviewImg mx-auto d-block" src={review.client_img} alt="Client image" />
      <h4 className="py-3 reviewTitle">{review.title}</h4>
        <p className="reviewDes">{review.description}</p>
     </div>
      })

        var settings = {
            swipeToSlide: true,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 2500,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container className="text-center">
                    <h4 className="text-center videoTitle py-5">CLIENT SAYS</h4>
                    <Row className="justify-content-center">
                        <Col lg={6} sm={12} md={12}>
                            <Slider {...settings} >
                              
                               {reviews}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Review;