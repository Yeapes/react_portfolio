import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import Footer from '../components/Footer/Footer';
import RefundSection from '../components/RefundDescription/RefundSection';
class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Refund Policy" />
                <TopPageBanner title="Refund Policy" />
                <RefundSection />
                <Footer />
            </Fragment> 
        );
    }
}

export default RefundPage;