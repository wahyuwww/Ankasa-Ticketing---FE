import React from 'react'
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from 'react-router-dom';


const Country = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Country</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Country
                </h6>
              </div>
              <Link to="/country/create">
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
                        <th>name</th>
                        <th>Alias</th>
                        <th>city_name</th>
                        <th>image</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>name</th>
                        <th>Alias</th>
                        <th>city_name</th>
                        <th>image</th>
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
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
                          <Link to="/conutry/detail">
                            <button className="btn btn-success">
                              <span className="text">Detail</span>
                            </button>
                          </Link>
                          <Link to="/conutry/edit">
                            <button className="mr-2 ml-2 btn btn-primary">
                              <span className="text">Edit</span>
                            </button>
                          </Link>
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
  );
}

export default Country