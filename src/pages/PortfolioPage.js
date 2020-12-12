import React, { Component, Fragment } from 'react';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import TopNavbar from '../components/navbar/TopNavbar';
import Footer from '../components/Footer/Footer';
import Portfolio from '../components/Portfolio/Portfolio';
class PortfolioPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Portfolio" />
                <TopPageBanner title="Portfolio" />
                <Portfolio />
                <Footer />
            </Fragment>
        );
    }
}

export default PortfolioPage;