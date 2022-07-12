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
          <h1 className="h3 mb-2 text-gray-800">Edit Flights</h1>
        </div>
        <div className="mb-5">
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
                placeholder="nama pesawat"
              />
            </div>
            <div class="col-6 mt-3">
              <label class="mr-sm-2" for="inlineFormCustomSelect">
                Departure city
              </label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Kota</option>
                <option value="1">Solo</option>
                <option value="2">Balikpapan</option>
                <option value="3">Jakarta</option>
              </select>
            </div>
            <div class="col-6 mt-3">
              <label class="mr-sm-2" for="inlineFormCustomSelect">
                Arrival city
              </label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Kota</option>
                <option value="1">Solo</option>
                <option value="2">Balikpapan</option>
                <option value="3">Jakarta</option>
              </select>
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="startDate" className="form-label">
                Departure time
              </label>
              <input
                id="startDate"
                class="form-control"
                type="date"
                className="form-control"
                placeholder
                required
              />
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="startDate" className="form-label">
                Arrival time
              </label>
              <input
                id="startDate"
                class="form-control"
                type="date"
                className="form-control"
                placeholder
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="firstName" className="form-label">
                Code
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="firstName" className="form-label">
                Direct
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="firstName" className="form-label">
                Transit
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label htmlFor="lastName" className="form-label">
                More Transit
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder
                required
              />
            </div>
            <div className="col-md-3 mt-2">
              <label
                htmlFor="firstName"
                id="inlineFormCustomSelect"
                className="form-label"
              >
                Meal
              </label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Meal ?</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
            <div className="col-md-3 mt-2">
              <label
                htmlFor="firstName"
                className="form-label"
                id="inlineFormCustomSelect"
              >
                Lugage
              </label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Lugage ?</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
            <div className="col-md-3 mt-2">
              <label
                htmlFor="lastName"
                className="form-label"
                id="inlineFormCustomSelect"
              >
                Wifi
              </label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Wifi ?</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
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
                placeholder="Gate B"
              />
            </div>
            <div className="col-6 mt-2">
              <label htmlFor="address" className="form-label">
                Terminal
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Juanda"
                required
              />
            </div>
          </div>
          <Link to="/flights">
            <button className="ml-4 mt-3 btn btn-warning" type="submit">
              Back To Flights
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
