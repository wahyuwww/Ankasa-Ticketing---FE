import React,{useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link, useParams } from "react-router-dom";
import { detailFlightsAction } from "../../../configs/redux/actions/detailflightsAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Detail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const {data}  = useSelector((state) => state.detailFlights);
    const { arrival_time,code,classf,departure_date,departure_time,destination_city,gate,is_active,lugage,meal,name,origin_city,price,stock,terminal,transit,wifi } = data;
    console.log(data);
    // };
    useEffect(() => {
      dispatch(detailFlightsAction(id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="box-header with-border mb-3 ml-3">
            <h1 classname="h3 mb-2 text-gray-800">Detail Flights {name}</h1>
          </div>
          <div className="box-header with-border mb-3 ml-3">
            <Link to="/flights">
              <a href=" " className="btn btn-success">
                Kembali
              </a>
            </Link>
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
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Departure city</h6>
                        </td>
                        <td>:</td>
                        <td>{origin_city}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Arival city</h6>
                        </td>
                        <td>:</td>
                        <td>{destination_city}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Departure time</h6>
                        </td>
                        <td>:</td>
                        <td> {departure_time}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Arrival time</h6>
                        </td>
                        <td>:</td>
                        <td>{arrival_time}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary">Departure date</h6>
                        </td>
                        <td>:</td>
                        <td>{moment(departure_date).format("llll")}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Code</h6>
                        </td>
                        <td>:</td>
                        <td>{code}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Active</h6>
                        </td>
                        <td>:</td>
                        <td>{is_active === 1 ? "active" : "non active"}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Stock</h6>
                        </td>
                        <td>:</td>
                        <td>{stock}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary">Price</h6>
                        </td>
                        <td>:</td>
                        <td> $ {price}</td>
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
                          <h6 className="text-primary"> Wifi</h6>
                        </td>
                        <td width="5%">:</td>
                        <td>{wifi === 1 ? "Ready" : "Non Ready"}</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="text-primary"> Lugage</h6>
                        </td>
                        <td>:</td>
                        <td>{lugage === 1 ? "Ready" : "Non Ready"}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Meal</h6>
                        </td>
                        <td>:</td>
                        <td>{meal === 1 ? "Ready" : "Non Ready"}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Transit</h6>
                        </td>
                        <td>:</td>
                        <td>{transit === 1 ? "Ready" : "Non Ready"}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          <h6 className="text-primary"> Gate</h6>
                        </td>
                        <td>:</td>
                        <td>{gate === 1 ? "Ready" : "Non Ready"}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary"> Terminal</h6>
                        </td>
                        <td>:</td>
                        <td>{terminal}</td>
                      </tr>
                      <tr>
                        <td classname="text-primary">
                          {" "}
                          <h6 className="text-primary"> Class</h6>
                        </td>
                        <td>:</td>
                        <td>{classf}</td>
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
