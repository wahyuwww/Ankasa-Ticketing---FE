/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";

const flights = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar activefligts="active"/>
        <div id="content-wrapper" className="d-flex flex-column">
          <Navbar />
          <div>
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-2 text-gray-800">Kelola Flights</h1>
              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Data Flights
                  </h6>
                </div>
                <Link to="/flights/create">
                  <button className="btn btn-warning ml-3 mt-2">
                    <span className="text"> + Create</span>
                  </button>
                </Link>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th>Airlines</th>
                          <th>Departure City</th>
                          <th>Arrival city</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Airlines</th>
                          <th>Departure City</th>
                          <th>Arrival city</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <Link to="/flights/detail">
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to="/flights/edit">
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>$320,800</td>
                          <td>
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                            <button className=" btn btn-danger">
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content"></div>
        </div>
      </div>
    </>
  );
};

export default flights;
