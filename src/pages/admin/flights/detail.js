import React from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";

const Detail = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="box-header with-border mb-3 ml-3">
            <h1 classname="h3 mb-2 text-gray-800">
              Detail Flights (nama flights)
            </h1>
          </div>
          <div className="box-header with-border mb-3 ml-3">
            <a href="/flights" className="btn btn-success">
              Kembali
            </a>
          </div>
          <div className="ml-1 row">
            <div className="col-md-6">
              <div className="box">
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%" classname="text-primary">
                          <h6 className="text-primary">Airlines</h6>
                        </td>
                        <td width="5%">:</td>
                        <td>Garuda</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Departure city</h6>
                        </td>
                        <td>:</td>
                        <td>solo</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Arival city</h6>
                        </td>
                        <td>:</td>
                        <td>Bandung</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Departure time</h6>
                        </td>
                        <td>:</td>
                        <td> 28/09/2022</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Arrival time</h6>
                        </td>
                        <td>:</td>
                        <td> 28/09/2022</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Code</h6>
                        </td>
                        <td>:</td>
                        <td>092091FA</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Direct</h6>
                        </td>
                        <td>:</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Transit</h6>
                        </td>
                        <td>:</td>
                        <td>No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="box-header with-border " />
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td width="30%">
                          <h6 className="text-primary"> More transit</h6>
                        </td>
                        <td width="5%">:</td>
                        <td>yes</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="text-primary"> Lugage</h6>
                        </td>
                        <td>:</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Meal</h6>
                        </td>
                        <td>:</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Wifi</h6>
                        </td>
                        <td>:</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Gate</h6>
                        </td>
                        <td>:</td>
                        <td>Gate B</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary"> Terminal</h6>
                        </td>
                        <td>:</td>
                        <td>Juanda</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary"> Stock</h6>
                        </td>
                        <td>:</td>
                        <td>100 person</td>
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
};

export default Detail;
