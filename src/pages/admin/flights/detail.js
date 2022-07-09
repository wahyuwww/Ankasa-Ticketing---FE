import React from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";

const Detail = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div class="box-header with-border mb-3 ml-3">
          <a href="/flights" class="btn btn-success">
            Kembali
          </a>
        </div>
        <div class="ml-1 row">
          <div class="col-md-6">
            <div class="box">
              <div class="box-body">
                <table class="table table-bordered">
                  <tr>
                    <td width="30%" className="text-primary">
                      {" "}
                      Airlines
                    </td>
                    <td width="5%">:</td>
                    <td>Garuda</td>
                  </tr>
                  <tr>
                    <td className="text-primary">departure city</td>
                    <td>:</td>
                    <td>solo</td>
                  </tr>
                  <tr>
                    <td className="text-primary">arival city</td>
                    <td>:</td>
                    <td>Bandung</td>
                  </tr>
                  <tr>
                    <td className="text-primary">Departure time</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">arrival time</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">code</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">departure_date</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">direct</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">transit</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box">
              <div class="box-header with-border "></div>
              <div class="box-body">
                <table class="table table-bordered">
                  <tr>
                    <td width="30%" className="text-primary">
                      {" "}
                      more transit
                    </td>
                    <td width="5%">:</td>
                    <td>Garuda</td>
                  </tr>
                  <tr>
                    <td className="text-primary">lugage</td>
                    <td>:</td>
                    <td>solo</td>
                  </tr>
                  <tr>
                    <td className="text-primary">meal</td>
                    <td>:</td>
                    <td>Bandung</td>
                  </tr>
                  <tr>
                    <td className="text-primary">wifi</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">gate</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">terminal</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                  <tr>
                    <td className="text-primary">stock</td>
                    <td>:</td>
                    <td> 28/09/2022</td>
                  </tr>
                </table>
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
