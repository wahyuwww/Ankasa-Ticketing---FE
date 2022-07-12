import React from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div class="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Country</h1>
        </div>
        <div>
          {" "}
          <div className="ml-3 mr-3 row">
            <div className="col-6 mt-2">
              <label htmlFor="text" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-6 mt-2">
              <label htmlFor="text" className="form-label">
                Alias
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-6 mt-2">
              <label htmlFor="text" className="form-label">
                Name City
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="firstName" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="firstName"
                required
              />
            </div>
          </div>
          <Link to="/country">
            <button className="ml-4 mt-3 btn btn-warning" type="submit">
              Back To Country
            </button>
          </Link>
          <button className="ml-4 mt-3 btn btn-primary" type="submit">
            Submit
          </button>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Create;
