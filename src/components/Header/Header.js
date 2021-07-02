import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="http://localhost:3000">
            Bird Recognition System
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
