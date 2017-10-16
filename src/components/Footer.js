import React, { Component } from "react";
import Scroll from "react-scroll";
var Link = Scroll.Link

class Footer extends Component {
	render () {
		return (
			<footer
		        className="page-section footer"
		        style={{ padding: "2em" }}
      		>
		        <div className="container">
		          <div className="footer-text">
		            <div className="footer-copy font-alt">
		              &copy; SPMitchel Designs 2017.
		            </div>
		          </div>
		          <div className="local-scroll">
		          <Link
		            to="top"
		            activeClass="activeScroll"
		            spy={true}
		            smooth={true}
		            offset={0}
		            duration={700}
		            className="link-to-top"
		          >
		            <i className="fa fa-caret-up white" />
		          </Link>
		        </div>
		        </div>
		        
      		</footer>
			)
	}
}

export default Footer;