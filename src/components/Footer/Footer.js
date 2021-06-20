import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <nav
        className="navbar py-4 bg-dark text-white-50"
        style={{ marginTop: "50px" }}
      >
        <div className="container-fluid justify-content-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </nav>
    );
  }
}

export default Footer;
