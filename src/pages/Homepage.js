import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import TopBanner from '../components/topBanner/TopBanner';
import Service from '../components/services/Service';
import Analysis from '../components/analysis/Analysis';
import Summary from '../components/summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import Review from '../components/Review/Review';
import Footer from '../components/Footer/Footer';

class Homepage extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
        <Fragment>
            <TopNavbar title="Home" />
            <TopBanner />
            <Service />
            <Analysis />
            <Summary />
            <RecentProject />
            <Courses />
            <Video />
            <Review />
            <Footer />
        </Fragment>
        );
    }
}

export default Homepage;