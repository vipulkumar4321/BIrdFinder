import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-dark border border-info">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="http://localhost:3000">
            Bird Finder Website
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
