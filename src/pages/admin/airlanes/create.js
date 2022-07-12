/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAirlanes } from "../../../configs/redux/actions/airlanesActions";


const Create = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(["https://fakeimg.pl/350x250/"]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState([
    "https://fakeimg.pl/350x250/",
  ]);
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (image.length == 0 || name.length == 0) {
      setError(true);
    }
    if (name && image) {
      const data = new FormData();
      data.append("name", name);
      data.append("image", image);
      e.preventDefault();
      dispatch(createAirlanes(data, navigate));
      alert("yess berhasil");
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    setImagePreview(URL.createObjectURL(file));
  };
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div class="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Create Airlanes</h1>
        </div>
        <form action="" onSubmit={onSubmit}>
          <div>
            {" "}
            <div className="ml-3 mr-3 row">
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  placeholder="masukan nama"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="email"
                />
                {error && name.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="firstName"
                  required
                />
                {error && image.length <= 0 ? (
                  <label>image can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Link to="/airlanes">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To airlanes
              </button>
            </Link>
            <button className="ml-4 mt-3 btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div id="content"></div>
      </div>
    </div>
  );
};

export default Create;
