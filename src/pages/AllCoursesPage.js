import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
import Footer from '../components/Footer/Footer';
import AllCourses from '../components/AllCourses/AllCourses';
class AllCoursesPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Courses" />
                <TopPageBanner title="All Courses" />
                <AllCourses />
                <Footer />
            </Fragment>
        );
    }
}

export default AllCoursesPage;