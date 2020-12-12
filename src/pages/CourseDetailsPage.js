import React, { Component, Fragment } from 'react';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import TopNavbar from '../components/navbar/TopNavbar';

class CourseDetailsPage extends Component {
    constructor({match}){
        super();
        this.state = {
            id: match.params.courseId,
        }
    }
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar title="Courses" />
                 <CourseDetails id={this.state.id} />
                <Footer />
            </Fragment>
        );
    }
}

export default CourseDetailsPage;