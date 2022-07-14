/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setFlights,
  deleteFlights,
} from "../../../configs/redux/actions/flightsActions";
import Swal from "sweetalert2";

const Flights = () => {
  const { flights } = useSelector((state) => state.allFlights);
  const dispatch = useDispatch();
  console.log(flights);
  const fetchData = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/flight/getflights/`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data.data);
    dispatch(setFlights(response.data.data));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deletes = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this flights?",
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
            `${process.env.REACT_APP_API_BACKEND}/flight/deleteflights/${id}`
          )
          .then((res) => {
            fetchData();
            dispatch(deleteFlights(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            console.log(res);
          });
      }
    });
  };

    const onActive = async (id) => {
      await axios
        .put(`${process.env.REACT_APP_API_BACKEND}/flight/switch/${id}`)
        .then((res) => {
          // alert("berhasil");
          fetchData();
          // navigate("/airlanes");
          console.log(res);
        });
    };
    useEffect(() => {
      onActive();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <>
      <div id="wrapper">
        <Sidebar activefligts="active" />
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
                          <th>No</th>
                          <th>Airlines</th>
                          <th>Departure City</th>
                          <th>Arrival city</th>
                          <th>Price</th>
                          <th>Class</th>
                          <th>Activasi</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>No</th>
                          <th>Airlines</th>
                          <th>Departure City</th>
                          <th>Arrival city</th>
                          <th>Price</th>
                          <th>Class</th>
                          <th>Activasi</th>
                          <th>Actions</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {flights.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                              {item.origin_city} ({item.departure_time})
                            </td>
                            <td>
                              {item.destination_city} ({item.arrival_time})
                            </td>
                            <td>$ {item.price}</td>
                            <td>{item.class}</td>
                            <td>
                              <button
                                onClick={() => onActive(item.id)}
                                className={
                                  item.is_active === 1
                                    ? "btn btn-primary"
                                    : "btn btn-secondary"
                                }
                              >
                                {item.is_active === 1 ? "active" : "non active"}
                              </button>
                            </td>
                            <td>
                              <Link to={`/detailFlights/${item.id}`}>
                                <button className="btn btn-success">
                                  <span className="text">Detail</span>
                                </button>
                              </Link>
                              <Link to={`/editFlights/${item.id}`}>
                                <button className="mr-2 ml-2 btn btn-primary">
                                  <span className="text">Edit</span>
                                </button>
                              </Link>
                              <button
                                onClick={() => deletes(item.id)}
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
    </>
  );
};

export default Flights;
