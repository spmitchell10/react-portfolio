import React, { Component } from "react";
import mainIMG from "../images/main_IMG.jpeg";
import Scroll from "react-scroll";
var Link = Scroll.Link;

class Home extends Component {
	render() {
		return(
			<section
		        className="page-section bg-dark colorFade"
		        id="home"
		        style={{ backgroundImage: `url(${mainIMG})`, minHeight: "100vh" }}
      		>

      			<section className="scrollArrowHome">
                      <Link
                        to="skills"
                        activeClass="activeScroll"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <span className="fa fa-angledown" />
                      </Link>
                </section>
  
      		</section>
			)
	}
}

export default Home;