import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutTheSite from "./components/AboutTheSite/AboutTheSite";
import InputImage from "./components/InputImage/InputImage";
class App extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <Header />

        <AboutTheSite />

        <InputImage />

        <Footer />
      </div>
    );
  }
}

export default App;
