import React, { Component } from "react";
import { About, Contact, Experience, Footer, Header, Layout, NavBar, Portfolio } from "../components";

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
				<About />
				<Contact />
				<Experience />
				<Footer />
				<Header />
				<NavBar />
				<Portfolio />
			</div>
		);
	}
}

export default Layout;