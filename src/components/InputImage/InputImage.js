import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class InputImage extends React.Component {
  state = {
    selectedFile: null,
    image: null,
  };

  fileSelectedHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        selectedFile: event.target.files[0],
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  fileUploadHandler = () => {
    if (this.state.selectedFile.size < 1) {
      console.log("non");
      return;
    }

    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("link", fd, {
        //Provide the link of the uploading site like firebase, etc. https://www.youtube.com/watch?v=qZ1EFnFOGvE
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={this.fileSelectedHandler}
          ref={(fileInput) => (this.fileInput = fileInput)}
        />

        <div className="d-grid gap-2 col-4 mx-auto container">
          <button
            className="btn btn-primary onClick={this.fileUploadHandler}"
            type="button"
            onClick={() => this.fileInput.click()}
          >
            Capture/Upload Bird Image
          </button>
        </div>

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

        <div className="d-grid gap-2 col-4 mx-auto container">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.fileUploadHandler}
          >
            Search This Bird
          </button>
        </div>
      </div>
    );
  }
}

export default InputImage;
