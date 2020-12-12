import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/navbar/TopNavbar';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';
import TopPageBanner from '../components/TopPageBanner/TopPageBanner';
class ProjectDetailsPage extends Component {

    constructor({match}){
        super();
        this.state = {
            projectId: match.params.projectId,
        }
    }

    componentDidMount(){
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <TopNavbar title="Project Details" />
                <TopPageBanner title="Project Details" />
                <ProjectDetails id={this.state.projectId} />
                <Footer />
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;