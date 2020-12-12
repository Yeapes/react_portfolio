import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import Service from '../components/services/Service';
import Footer from '../components/Footer/Footer';
class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Service" />
                <TopPageBanner title="Service Page" />
                <Service />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicePage;