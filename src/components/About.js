import React, { Component } from "react";
import Scroll from 'react-scroll';

class Aboout extends Component {
	render(){
		return (
			<section
		        className="page-section"
		        id="skills"
		        style={{ minHeight: "100vh" }}
      		>
        <div className="container relative">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">
                Skills
              </h2>
            </div>

            <div className="col-sm-9">
              <div className="section-text mb-50 mb-xs-30">
                Hi there, my name is Stephen Mitchell! I'm a Front-End Web Developer and a graduate of The Iron Yard Cincinnati. Essentially, I help people tell computers to do things. I'm a very driven, family-oriented person, who loves oppurtunites to learn and grow.
                <br />
                <br />I have educational knowledge in Web Design and Business Management. I really enjoy UI/UX, find Back-End coding to be lots of fun, but mostly I specialize in Front-End Development.
                <br />
                <br />When I'm not coding, you'll find me hanging out with my wife, Jackie, and my son, Soren. I also love to read, workout, bike, hike, camp...really anything outdoors.
                <br />
                <br />Here are some of the coding skills I currenlty use!

              </div>

              <div className="row skill-list">
                <i class="devicon-html5-plain-wordmark" />
	            <i className="devicon-css3-plain-wordmark" />
	            <i className="devicon-sass-original" />
	            <i className="devicon-javascript-plain" />
	            <i className="devicon-angularjs-plain" />
	            <i className="devicon-jquery-plain-wordmark" />
	            <i className="devicon-react-original-wordmark" />
	            <i className="devicon-nodejs-plain" />
	            <i className="devicon-amazonwebservices-plain-wordmark" />
	            <i className="devicon-mongodb-plain-wordmark" />
	            <i className="devicon-bootstrap-plain-wordmark" />
	            <i className="devicon-gulp-plain" />
	            <i className="devicon-github-plain-wordmark" />
	            <i className="devicon-git-plain-wordmark" />
	            <i className="devicon-heroku-original-wordmark" />
              </div>
            </div>
          </div>
        </div>
        <section className="scrollArrow">
          <Link
            to="portfolio"
            activeClass="activeScroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span
              className="fa fa-angledown"
              style={{
                borderBottom: "2px solid",
                borderLeft: "2px solid"
              }}
            />
          </Link>
        </section>
      </section>
			)
	}
}

export default About; 