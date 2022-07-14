import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setBooking,deleteBooking } from "../../../configs/redux/actions/bookingActions";
import Swal from "sweetalert2";

const Airlanes = () => {
  const booking = useSelector((state) => state.allBooking.booking);
  const dispatch = useDispatch();
  console.log(booking);
  const fetchData = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/booking/getbooking`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setBooking(response.data.data));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deletebooking = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this booking?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(
            `${process.env.REACT_APP_API_BACKEND}/booking/deletebooking/${id}`
          )
          .then((res) => {
            fetchData();
            dispatch(deleteBooking(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            console.log(res);
          });
      }
    });
  };

  return (
    <div id="wrapper">
      <Sidebar activebooking="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Booking</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Booking
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>nationality</th>
                        <th>Payment Status</th>
                        <th>Total Payment</th>
                        <th>Total Order</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {booking.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.full_name}</td>
                          <td>{item.nationality}</td>
                          <td>
                            {item.payment_status === 1 ? "SUCCESS" : "PENDING"}
                          </td>
                          <td>{item.total_payment}</td>
                          <td>{item.totalorder}</td>
                          <td>
                            <Link to={`/detailBooking/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to={`/editBooking/${item.id}`}>
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => deletebooking(item.id)}
                              className=" btn btn-danger"
                            >
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
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

export default Airlanes;
