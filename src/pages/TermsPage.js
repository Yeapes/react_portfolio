import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import Footer from '../components/Footer/Footer';
import TermsDescription from '../components/TermsDescription/TermsDescription';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';

class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar />
                <TopPageBanner title="Terms & Condition" />
                <TermsDescription />
                <Footer />
            </Fragment> 
        );
    }
}

export default TermsPage;