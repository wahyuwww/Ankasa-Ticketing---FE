/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import {
 bookingdetailAction
} from "../../../configs/redux/actions/bookingsAction";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.bookingdetail);
  const {
    user_id,
    flight_id,
    title,
    full_name,
    nationality,
    travel_insurance,
    payment_status,
    total_payment,
    totalorder,
  } = data;
  console.log(data);
  // };
  useEffect(() => {
    dispatch(bookingdetailAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="wrapper">
      <Sidebar activebooking="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">
            Detail Booking {title} {full_name}
          </h1>
        </div>
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/booking">
            <a href="" className="btn btn-success">
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
                      <td width="30%" className="text-primary">
                        <h6 className="text-primary">Name</h6>
                      </td>
                      <td width="5%">:</td>
                      <td>{full_name}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Title</h6>
                      </td>
                      <td>:</td>
                      <td>{title}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Nationality</h6>
                      </td>
                      <td>:</td>
                      <td>{nationality}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Travel Insurance</h6>
                      </td>
                      <td>:</td>
                      <td>{travel_insurance}</td>
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
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Payment Status</h6>
                      </td>
                      <td>:</td>
                      <td>{payment_status === 1 ? "SUCCESS" : "PENDING"}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Total Payment</h6>
                      </td>
                      <td>:</td>
                      <td>{total_payment}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Total Order</h6>
                      </td>
                      <td>:</td>
                      <td>{totalorder}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
};;

export default Detail;
