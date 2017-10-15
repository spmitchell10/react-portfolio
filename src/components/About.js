import React, { Component } from "react";
import Scroll from 'react-scroll';
import ReactTooltip from 'react-tooltip';
var Link = Scroll.Link;


class About extends Component {
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
                Skills/About
              </h2>
            </div>

            <div className="col-sm-9">
              <div className="section-text mb-50 mb-xs-30">
                Hi there, my name is Stephen Mitchell! I'm a Front-End Web Developer and a graduate of The Iron Yard Cincinnati. Essentially, I help people tell computers to do things. I'm a very driven, family-oriented person, who loves oppurtunites to learn and grow.
                <br />
                <br />
                I have educational knowledge in Web Design and Business Management. I really enjoy UI/UX, find Back-End coding to be lots of fun, but mostly I specialize in Front-End Development.
                <br />
                <br />
                When I'm not coding, you'll find me hanging out with my wife, Jackie, and my son, Soren. I also love to read, workout, bike, hike, camp...really anything outdoors.
                <br />
                <br />
                Here are some of the coding skills I currenlty use!

              </div>

              <div className="row skill-list">
                <i data-tip data-for="html5" class="devicon-html5-plain-wordmark devicon" />
                  <ReactTooltip id="html5" type="dark" place="bottom">
                    <span>HTML5</span>
                  </ReactTooltip>
  	            <i data-tip data-for="CSS3" className="devicon-css3-plain-wordmark devicon" />
                  <ReactTooltip id="CSS3" type="dark" place="bottom">
                    <span>CSS3</span>
                  </ReactTooltip>
  	            <i data-tip data-for="SASS" className="devicon-sass-original devicon" />
                  <ReactTooltip id="SASS" type="dark" place="bottom">
                    <span>SASS</span>
                  </ReactTooltip>
  	            <i data-tip data-for="JavaScript" className="devicon-javascript-plain devicon" />
                  <ReactTooltip id="JavaScript" type="dark" place="bottom">
                      <span>JavaScript</span>
                  </ReactTooltip>
                <i data-tip data-for="React" className="devicon-react-original-wordmark devicon" />
                  <ReactTooltip id="React" type="dark" place="bottom">
                    <span>React</span>
                  </ReactTooltip>
  	            <i data-tip data-for="Angular" className="devicon-angularjs-plain devicon" />
                  <ReactTooltip id="Angular" type="dark" place="bottom">
                    <span>Angular</span>
                  </ReactTooltip>
  	            <i data-tip data-for="jQuery" className="devicon-jquery-plain-wordmark devicon" />
                  <ReactTooltip id="jQuery" type="dark" place="bottom">
                    <span>jQuery</span>
                  </ReactTooltip>
  	            <i data-tip data-for="Node" className="devicon-nodejs-plain devicon" />
                  <ReactTooltip id="Node" type="dark" place="bottom">
                    <span>Node</span>
                  </ReactTooltip>
  	            <i data-tip data-for="AWS" className="devicon-amazonwebservices-plain-wordmark devicon" />
                  <ReactTooltip id="AWS" type="dark" place="bottom">
                    <span>AWS</span>
                  </ReactTooltip>
  	            <i data-tip data-for="MongoDB" lassName="devicon-mongodb-plain-wordmark devicon" />
                  <ReactTooltip id="MongoDB" type="dark" place="bottom">
                    <span>MongoDB</span>
                  </ReactTooltip>
  	            <i data-tip data-for="Bootstrap" className="devicon-bootstrap-plain-wordmark devicon" />
                  <ReactTooltip id="Bootstrap" type="dark" place="bottom">
                    <span>Bootstrap</span>
                  </ReactTooltip>
  	            <i data-tip data-for="Gulp" className="devicon-gulp-plain devicon" />
                  <ReactTooltip id="Gulp" type="dark" place="bottom">
                    <span>Gulp</span>
                  </ReactTooltip>
  	            <i data-tip data-for="GitHub" className="devicon-github-plain-wordmark devicon" />
                  <ReactTooltip id="GitHub" type="dark" place="bottom">
                    <span>GitHub</span>
                  </ReactTooltip>
  	            <i data-tip data-for="Git" className="devicon-git-plain-wordmark devicon" />
                  <ReactTooltip id="Git" type="dark" place="bottom">
                    <span>Git</span>
                  </ReactTooltip>
  	            <i data-tip data-for="Heroku" className="devicon-heroku-original-wordmark devicon" />
                  <ReactTooltip id="Heroku" type="dark" place="bottom">
                    <span>Heroku</span>
                  </ReactTooltip>
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