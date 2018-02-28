import React, { Component } from 'react';
import Styles from './css/App.css';
import { Layout } from "./components";

class App extends Component {
  componentDidMount(){
    console.log("Houston, we have liftoff.");
  }
  
  render() {
    return (
      <div className="appear-animate">
        <div className="page-loader">
          <div className="loader">Loading...</div>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;
