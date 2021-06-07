import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AboutTheSite extends React.Component {
  render() {
    return (
      <div className="p-5 mb-4 mt-5 text-white bg-dark rounded-3">
        <div className="container-fluid py-5 ">
          <h1 className="display-5 fw-bold d-flex justify-content-around">
            What We Do!!!
          </h1>
          <p className="col-md-12 fs-4 mt-5 d-flex justify-content-around">
            In this project we have used neural network which is a subpart of
            machine learning. We have created a machine learning model which is
            able to identify different bird species. Computer vision is an
            emerging field in artificial intelligence. Our bird species
            identification is a step in this direction, which enables machine to
            identify various bird species. This model would be extremely
            beneficial for research purposes to track down migratory birds and
            their behavioral patterns. Also, endangered species can be
            identified using this model. Once an image containing bird is given
            to our model our model can automatically identify it extract its
            relevant features and classify them.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutTheSite;
