import React, { Component } from "react";
import { About, NavBar, Home } from "../components";

class Layout extends Component {
	componentDidMount() {
		let baseLayout = document.querySelector(".page");
   		 baseLayout.onload = setTimeout(function() {
	      let pageLoader = document.querySelector(".page-loader");
	      pageLoader.style.display = "none";
    	}, 
    	1000);
	}

	render(){
		return (
			<div className="page" id="top">
				<NavBar />
				<Home />
				<About />
			</div>
		);
	}
}

export default Layout;