import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAirlanes } from "../../../configs/redux/actions/airlanesActions";
import { deleteAirlanes } from "../../../configs/redux/actions/airlanesActions";
// import Input from "../../../base/Input/Input";

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
  const deleteCategory = async (id) => {
    await axios
      .delete(
        `https://avtur-ankasa-ticketing.herokuapp.com/v1/admin/airlanes/delete/${id}`
      )
      .then((res) => {
        alert("delete success");
        fetchData();
        dispatch(deleteAirlanes(res));
        // navigate('/product')
        console.log(res);
      });
  };
  return (
    <div id="wrapper">
      <Sidebar />
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
                          <td>Edinburgh</td>
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
                              onClick={() => deleteCategory(item.id)}
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
