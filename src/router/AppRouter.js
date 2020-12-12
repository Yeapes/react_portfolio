import React, { Component, Fragment } from 'react';
import {Route,Switch} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import PortfolioPage from '../pages/PortfolioPage'; 
import ContactPage from '../pages/ContactPage';
import ServicePage from '../pages/ServicePage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import Homepage from '../pages/Homepage';
class AppRouter extends Component {
    
    render() {
        return (
          <Fragment>
              <Switch>
                 <Route exact path="/" component={Homepage} />
                 <Route exact path="/service" component={ServicePage} />
                 <Route exact path="/courses" component={AllCoursesPage} />
                 <Route exact path="/portfolio" component={PortfolioPage} />
                 <Route exact path="/contact" component={ContactPage} />
                 <Route exact path="/about" component={AboutPage} /> 
                 <Route exact path="/Refund" component={RefundPage} /> 
                 <Route exact path="/terms" component={TermsPage} /> 
                 <Route exact path="/privacy" component={PrivacyPage} /> 
                 <Route exact path="/details/:projectId" component={ProjectDetailsPage} /> 
                 <Route exact path="/courseDetails/:courseId" component={CourseDetailsPage} /> 
              </Switch>
          </Fragment>  
        );
    }
}

export default AppRouter;