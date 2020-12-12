import React, { Component, Fragment } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import whiteLogo from '../../asset/image/navlogo-white.svg';
import blueLogo from '../../asset/image/navlogoScroll-blue.svg';
class TopNavbar extends Component {

    constructor(props){
        super();
        this.state = {
            navbarTitle: "navbarTitle",
            logo: [whiteLogo],
            navVarient: "dark",
            navBack: "navbarBack",
            navItem: "navItem",
            title: props.title,
        }
    }

    onScroll = () =>{
        if(window.scrollY > 100){
            this.setState({navVarient:"light",navbarTitle:"navbarTitleScroll",logo:[blueLogo],navBack:"navBackScroll",navItem: "navItemScroll"})
        }else if(window.scrollY < 100){
            this.setState({navVarient:"dark",navbarTitle: "navbarTitle",logo:[whiteLogo],navBack:"navBack",navItem:"navItem"})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }
  
    render() {
        return (
             <Fragment>
                 <title>{this.state.title}</title> 
                 <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBack} variant={this.state.navVarient}>
                    <Navbar.Brand ><NavLink className={this.state.navbarTitle} to="/"><img src={this.state.logo} alt="logo" />Rayhan Al Yeapes</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/" >HOME</NavLink></Nav.Link> 
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/service" >SERVICES</NavLink></Nav.Link>  
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/courses" >COURSES</NavLink></Nav.Link> 
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/portfolio" >PORTFOLIO</NavLink></Nav.Link> 
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact" >CONTACT</NavLink></Nav.Link> 
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/about" >ABOUT</NavLink></Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar> 
             </Fragment>
        );
    }
}

export default TopNavbar;