import React, { Component } from "react";
import resume from "../documents/stephen_mitchell_resume.pdf";
import Headroom from "react-headroom";
import Scroll from "react-scroll";
var Link = Scroll.Link;

class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			backgroundColor: "transparent"
		};
	}
	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = e => {
    let mobileNav = document.querySelector(".sidenav");
    if (mobileNav.style.display !== "none") {
      mobileNav.style.display = "none";
    }
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop < 20) {
      this.setState({
        backgroundColor: "transparent"
      });
    } else {
      this.setState({ backgroundColor: "rgba(27, 27, 27, .8)" });
    }
  };

  toggleNav = () => {
    let nav = document.querySelector(".sidenav");
    if (nav.style.display !== "flex") {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  };

  render(){
  	return(
  		<Headroom>
  			<nav
  				className="main-nav dark"
  				style={{backgroundColor: this.state.backgroundColor}}
  			>
  			<span
  				className="navbar-logo"
  				style={{ display: "flex", alignItems: "center", margin: "0 3rem"}}
  			>
  				<h1 className="navLogo blink_s">S.<span className="NavLogoM blink_me">M.</span></h1>
  			</span>
  			<div
            className="full-wrapper relative clearfix"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div className="mobile-nav">
              <i onClick={this.toggleNav} className="fa fa-bars" />
              <div className="sidenav">
                <span
                  onClick={this.toggleNav}
                  className="fa fa-times closebtn"
                />
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      Contact
                    </Link>
                  </li>

                  {/* <!-- Button --> */}
                  <li>
                    <a href={resume} target="_blank">
                      <span
                        className="btn btn-mod btn-circle"
                        style={{ margin: 0 }}
                      >
                        <i className="fa fa-cloud-download" /> Download CV
                      </span>
                    </a>
                  </li>
                  {/* <!-- End Button --> */}
                </ul>
              </div>
            </div>

            {/* <!-- Main Menu --> */}
            <div className="inner-nav">
              <ul className="clearlist scroll-nav local-scroll">
                <li className="active">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Contact
                  </Link>
                </li>

                {/* <!-- Button --> */}
                <li>
                  <a href={resume} target="_blank">
                    <span className="btn btn-mod btn-circle">
                      <i className="fa fa-cloud-download" /> Download CV
                    </span>
                  </a>
                </li>
                {/* <!-- End Button --> */}
              </ul>
            </div>
          </div>
  		</nav>
  	</Headroom>
  		);
  }
}

export default NavBar;
  		 





