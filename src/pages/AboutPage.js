import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';

class AboutPage extends Component {
     
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="About Us" />
                <TopPageBanner title="About" />
                <AboutDescription />
                <Footer />
            </Fragment>       
        );
    }
}

export default AboutPage;