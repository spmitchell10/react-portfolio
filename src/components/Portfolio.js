import React, { Component } from "react";

import jamSesh from "../images/jamsesh.png";
import jtFit from "../images/jtfit.png";
import blog from "../images/blog.png";

class Portfolio extends Component {
	render () {
		return (
			<span>
		        
		        <div
		          id="portfolio"
		          className="parallax shadow"
		          style={{
		            backgroundImage: `url(${jtFit})`,
		            WebkitBackgroundImage: `url(${jtFit})`,
		            height: "100%",
		            minHeight: "100vh",
		            width: "100%",
		            backgroundSize: "70%",
		            backgroundPosition: "center",
		            backgroundColor: "#F26C59",
		            display: "flex",
		            justifyContent: "flex-end",
		            alignItems: "center"
		          }}
		        >
		          <div
		            className="work-intro"
		            style={{
		              width: "50%",
		              minHeight: "100vh",
		              display: "flex",
		              justifyContent: "flex-start",
		              alignItems: "flex-start",
		              flexDirection: "column",
		            }}
		          >
		          <h2 className="section-title portfolio-title header-underscore">
		              Portfolio
		            </h2>
		            
		          </div>
		          <div
		            className="work-intro"
		            style={{
		              width: "50%",
		              backgroundColor: "rgba(51, 51, 51, 0.7)",
		              minHeight: "100vh",
		              display: "flex",
		              justifyContent: "center",
		              alignItems: "center",
		              flexDirection: "column"
		            }}
		          >
		            <h3 className="work-title" style={{ color: "#fff" }}>
		              JTFitness
		            </h3>
		            <div className="work-descr" style={{ color: "#fff" }}>
		              Built with Angular, Node, and Bootstrap.
		            </div>
		            <div className="workButtons">
		              <a
		                href="http://www.jackietfitness.com/"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Live
		              </a>
		              <a
		                href="https://github.com/spmitchell10/JackieFitnessWebsite"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Code
		              </a>
		            </div>
		          </div>
		        </div>

		        <div
		          id="portfolio"
		          className="parallax"
		          style={{
		            backgroundImage: `url(${blog})`,
		            WebkitBackgroundImage: `url(${blog})`,
		            height: "100%",
		            minHeight: "100vh",
		            width: "100%",
		            backgroundSize: "70%",
		            backgroundPosition: "center",
		            backgroundColor: "#1B839D",
		            display: "flex",
		            justifyContent: "flex-end",
		            alignItems: "center"
		          }}
		        >
		          
		          <div
		            className="work-intro"
		            style={{
		              width: "50%",
		              backgroundColor: "rgba(51, 51, 51, 0.7)",
		              minHeight: "100vh",
		              display: "flex",
		              justifyContent: "center",
		              alignItems: "center",
		              flexDirection: "column"
		            }}
		          >
		            <h3 className="work-title" style={{ color: "#fff" }}>
		              Anchored Thoughts
		            </h3>
		            <div className="work-descr" style={{ color: "#fff" }}>
		              Built with JavaScript, Angular, MongoDB, and Bootstrap.
		            </div>
		            <div className="workButtons">
		              
		              <a
		                href="https://github.com/spmitchell10/Week-9---Angular-Blog"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Code
		              </a>
		            </div>
		          </div>
		          <div
		            className="work-intro"
		            style={{
		              width: "50%",
		              minHeight: "100vh",
		              display: "flex",
		              justifyContent: "flex-start",
		              alignItems: "flex-start",
		              flexDirection: "column"
		            }}
		          >
		            
		          </div>
		        </div>

		        <div
		          id="portfolio"
		          className="parallax"
		          style={{
		            backgroundImage: `url(${jamSesh})`,
		            WebkitBackgroundImage: `url(${jamSesh})`,
		            height: "100%",
		            minHeight: "100vh",
		            width: "100%",
		            backgroundSize: "70%",
		            backgroundPosition: "center",
		            backgroundColor: "#693166",
		            display: "flex",
		            justifyContent: "flex-end",
		            alignItems: "center"
		          }}
		        >
		          <div
		            className="work-intro"
		            style={{
		              width: "50%",
		              minHeight: "100vh",
		              display: "flex",
		              justifyContent: "flex-start",
		              alignItems: "flex-start",
		              flexDirection: "column"
		            }}
		          >
		           </div>
		          <div
		            className="work-intro"
		            style={{
		              width: "50%",
		              backgroundColor: "rgba(51, 51, 51, 0.7)",
		              minHeight: "100vh",
		              display: "flex",
		              justifyContent: "center",
		              alignItems: "center",
		              flexDirection: "column"
		            }}
		          >
		            <h3 className="work-title" style={{ color: "#fff" }}>
		              JamSesh
		            </h3>
		            <div className="work-descr" style={{ color: "#fff" }}>
		              Built with JavaScript, jQuery, and Bootstrap.
		            </div>
		            <div className="workButtons">
		              
		              <a
		                href="https://github.com/spmitchell10/Week-4---Tuesday"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Code
		              </a>
		            </div>
		          </div>
		        </div>


       		</span>
			);
	}
}

export default Portfolio; 