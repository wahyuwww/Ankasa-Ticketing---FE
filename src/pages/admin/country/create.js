import React from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";

const Create = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          {" "}
          <div className="ml-3 mr-3 row">
            <div className="col-12 mt-2">
              <label htmlFor="text" className="form-label">
                AirLines
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-12 mt-2">
              <label htmlFor="text" className="form-label">
                Departure city
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-12 mt-2">
              <label htmlFor="text" className="form-label">
                Arrival city
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-md-4 mt-2">
              <label htmlFor="firstName" className="form-label">
                Direct
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-md-4 mt-2">
              <label htmlFor="firstName" className="form-label">
                Transit
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-md-4 mt-2">
              <label htmlFor="lastName" className="form-label">
                More Transit
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="firstName" className="form-label">
                Meal
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="firstName" className="form-label">
                Lugage
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="lastName" className="form-label">
                Wifi
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="lastName" className="form-label">
                Stock
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder
                defaultValue
                required
              />
            </div>
            <div className="col-6 mt-2">
              <label htmlFor="text" className="form-label">
                Gate
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="col-6 mt-2">
              <label htmlFor="address" className="form-label">
                Termina
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
            </div>
          </div>
          <button className="ml-4 mt-3 btn btn-primary" type="submit">
            Continue to checkout
          </button>
        </div>

        <div id="content"></div>
      </div>
    </div>
  );
};

export default Create;
