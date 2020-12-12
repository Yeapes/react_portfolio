import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
class ContactPage extends Component {
    
    render() {
        return (
            <Fragment>
                <TopNavbar title="Contact Us" />
                <TopPageBanner title="Contact Us" />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;