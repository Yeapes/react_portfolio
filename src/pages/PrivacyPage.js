import React, { Component, Fragment } from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import TopNavbar from '../components/navbar/TopNavbar';
import Footer from '../components/Footer/Footer';
class PrivacyPage extends Component { 
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
        <Fragment>
            <TopNavbar title="Privacy " />
            <TopPageBanner title="Privacy" />
             <PrivacyPolicy />
            <Footer />
        </Fragment>  
        );
    }
}

export default PrivacyPage;