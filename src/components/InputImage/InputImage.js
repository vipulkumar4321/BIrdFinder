import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BIRDS } from "./data";
import "./InputImage.css";
class InputImage extends React.Component {
  state = {
    selectedFile: null,
    image: null,
    birdName: null,
    wikiLink: null,
  };

  fileSelectedHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        selectedFile: event.target.files[0],
        image: URL.createObjectURL(event.target.files[0]),
        birdName: null,
      });
    }
  };

  fileUploadHandler = () => {
    if (this.state.selectedFile.size < 1) {
      console.log("non");
      return;
    }

    const fd = new FormData();
    fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
    axios 
      .post("https://15.207.247.37/predict", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        let birdNameFromFlask = res.data;
        console.log(birdNameFromFlask);

        let birdWikiLink = BIRDS.filter((e) => e.bird === birdNameFromFlask);
        birdWikiLink = birdWikiLink[0].link;

        this.setState({
          birdName: birdNameFromFlask,
          wikiLink: birdWikiLink,
        });
      });
  };

  render() {
    return (
      <div className="main-content">
        <div>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={this.fileSelectedHandler}
            ref={(fileInput) => (this.fileInput = fileInput)}
          />

          <div className="d-grid gap-2 col-4 mx-auto container d-flex justify-content-center pad-input">
            <button
              className="btn btn-outline-dark btn-large onClick={this.fileUploadHandler}"
              type="button"
              onClick={() => this.fileInput.click()}
            >
              Capture/Upload Bird Image
            </button>
          </div>

          <div
            style={{
              display: this.state.selectedFile === null ? "none" : "",
            }}
          >
            <img
              src={this.state.image}
              className="rounded mx-auto d-block container shadow-lg p-3 mt-5 mb-5 bg-white"
              style={{
                maxWidth: "620px",
                maxHeight: "500px",
                objectFit: "contain",
              }}
              alt=""
            ></img>

            <div className="d-grid gap-2 col-4 mt-5 mx-auto container d-flex justify-content-center">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.fileUploadHandler}
              >
                Search This Bird
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: this.state.birdName === null ? "none" : "",
          }}
        >
          <div className="rounded mx-auto d-block container shadow-lg p-3 mt-5 mb-5 bg-white">
            <h1 className="d-flex justify-content-center">
              {this.state.birdName}
            </h1>
          </div>
        </div>

        <div
          className="container"
          style={{
            display: this.state.birdName === null ? "none" : "",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          <iframe
            allow="fullscreen"
            title="More Information about the bird."
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
            }}
            className="responsive-iframe"
            src={this.state.wikiLink}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default InputImage;
