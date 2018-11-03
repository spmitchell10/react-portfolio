import React, { Component } from "react";
import Scroll from "react-scroll";
var Link = Scroll.Link;

class Experience extends Component{
	render () {
		return(

			<section className="page-section" id="experience">
		        <div className="container relative">
		          <div className="row">
		            <div className="col-md-3 col-sm-4 breakdown">
		              <h2 className="section-title">
		                Experience
		              </h2>
		            </div>
		            <br />
		            <div className="col-md-9 col-sm-8">
		              <div className="section-text">
									<div className="row">
		                  <div className="col-md-3 black">Feb 18 &ndash; Present</div>
		                  <div className="col-md-9">
		                    <h4 className="mt-0">
		                      Katie Bush Designs
		                    </h4>
		                    Custom Wordpress and Siteleaf/Liquid builds. Tech stack includes: PHP, JavaScript, SASS, Jekyll, Ruby, Liquid, AWS, 
												Beanstalk, Git, FileZilla, and NGiNX.  
												
		                  </div>
		                </div>

										<hr />

		                <div className="row">
		                  <div className="col-md-3 black">May 17 &ndash; Present</div>
		                  <div className="col-md-9">
		                    <h4 className="mt-0">
		                      SPMitchell Designs
		                    </h4>
		                    Web Development and Design utilizing cutting-edge technology. I build interacitve
		                    web experiences that bring brands to life. Full stack development utilizing React,
		                    jQuery, Angular, Node, Express, MongoDB, and Wordpress.
		                  </div>
		                </div>

		                <hr />

		                <div className="row">
		                  <div className="col-md-3 black">Feb 17 &ndash; May 17 </div>
		                  <div className="col-md-9">
		                    <h4 className="mt-0">Front-End Web Engineering</h4>
		                    With a passion for technology and learning, I recently completed a 12 week, 
		                    full-time Front-End Engineering boot camp at The Iron Yard Cincinnati to enhance 
		                    my code base, and ensure I stay current with the latest technologies. 
		                    <br />In addition to HTML5 and CSS3, JavaScript was at the core throughout 
		                    the program and I worked with a variety of frameworks and libraries, including 
		                    Angular and React, to build a portfolio of apps with the user experience and 
		                    interface at the forefront. <br />I also have experience with Back-End systems, 
		                    specifically Node.js, Express.js, MongoDB, and Amazon Web Services. I have also 
		                    collaborated with small teams to build out responsive apps. 
		                    
		                  </div>
		                </div>

		                <hr />
		              </div>
		            </div>
		          </div>
		        </div>

				<section className="scrollArrow">
		          <Link
		            to="contact"
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

export default Experience;