/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const mapStateToProps = (state) => {
  return {
    data: state.bookingdetail,
  };
};

const Detail = (props) => {
    console.log(props.data)
  return (
    <>
      <div className="box-header with-border mb-3 ml-3">
        <h1 className="h3 mb-2 text-gray-800">
          {/* Detail Booking {title} {full_name} */}
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
                    <td width="30%" classname="text-primary">
                      <h6 className="text-primary">Name</h6>
                    </td>
                    <td width="5%">:</td>
                    {/* <td>{full_name}</td> */}
                  </tr>
                  <tr>
                    <td classname="text-primary">
                      {" "}
                      <h6 className="text-primary">Title</h6>
                    </td>
                    <td>:</td>
                    {/* <td>{title}</td> */}
                  </tr>
                  <tr>
                    <td classname="text-primary">
                      {" "}
                      <h6 className="text-primary">Nationality</h6>
                    </td>
                    <td>:</td>
                    {/* <td>{nationality}</td> */}
                  </tr>
                  <tr>
                    <td classname="text-primary">
                      {" "}
                      <h6 className="text-primary">Travel Insurance</h6>
                    </td>
                    <td>:</td>
                    {/* <td>{travel_insurance}</td> */}
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
                    {/* <td>{payment_status === 1 ? "SUCCESS" : "PENDING"}</td> */}
                  </tr>
                  <tr>
                    <td classname="text-primary">
                      {" "}
                      <h6 className="text-primary">Total Payment</h6>
                    </td>
                    <td>:</td>
                    {/* <td>{total_payment}</td> */}
                  </tr>
                  <tr>
                    <td classname="text-primary">
                      {" "}
                      <h6 className="text-primary">Total Order</h6>
                    </td>
                    <td>:</td>
                    {/* <td>{totalorder}</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, null)(Detail);
