import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <nav
        className="navbar py-4 foot-div"
        
      >
        <div className="container-fluid justify-content-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </nav>
    );
  }
}

export default Footer;
