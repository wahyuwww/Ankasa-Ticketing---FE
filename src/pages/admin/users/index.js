import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCustomer,deleteCustomer } from "../../../configs/redux/actions/costemersActions";
import Swal from "sweetalert2";

const Users = () => {
  const customer = useSelector((state) => state.allCustomer.customer);
  const dispatch = useDispatch();
  console.log(customer);
  const fetchData = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/users/getusers`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setCustomer(response.data.data));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deletes = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this USERS?",
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
            `${process.env.REACT_APP_API_BACKEND}/users/deleteusers/${id}`
          )
          .then((res) => {
            fetchData();
            dispatch(deleteCustomer(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            console.log(res);
          });
      }
    });
  };

  const onActive = async (id) => {
    await axios
      .put(`${process.env.REACT_APP_API_BACKEND}/users/activate/${id}`)
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
    <div id="wrapper">
      <Sidebar activeusers="active"/>
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Users</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Users
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
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>active</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customer.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>
                            <button
                              onClick={() => onActive(item.id)}
                              className={
                                item.is_active === true
                                  ? "btn btn-primary"
                                  : "btn btn-secondary"
                              }
                            >
                              {item.is_active === true
                                ? "active"
                                : "non active"}
                            </button>
                          </td>
                          <td>
                            <Link to={`/detailUsers/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => deletes(item.id)}
                              className=" btn btn-danger ml-2"
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

export default Users;
