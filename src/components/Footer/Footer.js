import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark" style={{ marginTop: "50px" }}>
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="http://localhost:3000/Name">
            Footer
          </a>
        </div>
      </nav>
    );
  }
}

export default Footer;
