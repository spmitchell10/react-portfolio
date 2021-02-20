import React, { Component } from "react";

import jamSesh from "../images/openLP.png";
import jtFit from "../images/aggiebound.png";
import blog from "../images/bluelava.png";

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
		            backgroundColor: "#700000",
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
		              Aggiebound
		            </h3>
		            <div className="work-descr" style={{ color: "#fff" }}>
		              Built with KenticoCMS, Javascript, SASS, Bootstrap.
		            </div>
		            <div className="workButtons">
		              <a
		                href="https://www.aggiebound.tamu.edu/"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Live
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
		            backgroundColor: "#59b1d8",
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
		              BlueLava
		            </h3>
		            <div className="work-descr" style={{ color: "#fff" }}>
		              Built with ReactJS, SiteleafCMS, and SASS.
		            </div>
		            <div className="workButtons">
		              
		              <a
		                href="https://www.blue-lava.net/"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Live
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
		            backgroundColor: "#507cbd",
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
		              #OpenLP
		            </h3>
		            <div className="work-descr" style={{ color: "#fff" }}>
		              Built with WordPressCSM, PHP, Javascript and SASS.
		            </div>
		            <div className="workButtons">
		              
		              <a
		                href="https://openlp.sapphireventures.com/"
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-mod btn-medium"
		              >
		                Live
		              </a>
		            </div>
		          </div>
		        </div>


       		</span>
			);
	}
}

export default Portfolio; 