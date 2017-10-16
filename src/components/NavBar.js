import React, { Component } from "react";
import resume from "../documents/stephen_mitchell_resume.pdf";
import Headroom from "react-headroom";
import { stack as Menu } from "react-burger-menu";
import Scroll from "react-scroll";
var Link = Scroll.Link;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


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

  render(){
  	return(


  		<Headroom>
                <Menu className="menu hidden-md hidden-lg" right isOpen={ false }>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={700} >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={700} >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="portfolio" spy={true} smooth={true} offset={0} duration={700} >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="experience" spy={true} smooth={true} offset={0} duration={700} >
                          Experience
                        </Link>
                      </li>
                      <li>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={700} >
                          Contact
                        </Link>
                      </li>

                      {/* <!-- Button --> */}
                      <li>
                        <a href={resume} target="_blank">
                          <span className="btn btn-mod btn-circle" style={{ margin: 0 }} >
                            <i className="fa fa-cloud-download" /> Download CV
                          </span>
                        </a>
                      </li>
                      {/* <!-- End Button --> */}
                    </ul>
                 </Menu>
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

                

                {/* <!-- Main Menu --> */}
                <div className="inner-nav">
                  <ul className="clearlist scroll-nav local-scroll">
                    <li className="active">
                      <Link to="home" spy={true} smooth={true} offset={0} duration={700} >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="skills" spy={true} smooth={true} offset={0} duration={700} >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="portfolio" spy={true} smooth={true} offset={0} duration={700} >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="experience" spy={true} smooth={true} offset={0} duration={700} >
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" spy={true} smooth={true} offset={0} duration={700} >
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
              
  		</nav>
  	</Headroom>
  		);
  }
}

export default NavBar;
  		 





