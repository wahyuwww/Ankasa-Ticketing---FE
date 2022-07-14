import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAirlanes } from "../../../configs/redux/actions/airlanesActions";
import { deleteAirlanes } from "../../../configs/redux/actions/airlanesActions";
import Swal from "sweetalert2";

const Airlanes = () => {
  const airlanes = useSelector((state) => state.allAirlanes.airlanes);
  const dispatch = useDispatch();
  console.log(airlanes);
  const fetchData = async () => {
    const response = await axios
      .get(
        `https://avtur-ankasa-ticketing.herokuapp.com/v1/admin/airlanes/getairlanes`
      )
      .catch((err) => {
        console.log(err);
      });
    dispatch(setAirlanes(response.data.data));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deletes = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this airlanes?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${process.env.REACT_APP_API_BACKEND}/airlanes/delete/${id}`)
          .then((res) => {
            fetchData();
            dispatch(deleteAirlanes(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            console.log(res);
          });
      }
    });
  };

  const onActive = async (id) => {
    await axios
      .put(`${process.env.REACT_APP_API_BACKEND}/airlanes/activate/${id}`)
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
      <Sidebar activeairlanes="active"/>
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Airlanes</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Airlanes
                </h6>
              </div>
              <Link to="/airlanes/create">
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
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>active</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {airlanes.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            {" "}
                            <img
                              width="100px"
                              height="100px"
                              src={item.image}
                              alt="img"
                            />
                          </td>
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
                            <Link to={`/detailAirlanes/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to={`/editAirlanes/${item.id}`}>
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
  );
};

export default Airlanes;
