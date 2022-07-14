/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCountry } from "../../../configs/redux/actions/countryActions";
import Swal from "sweetalert2";
import Input from "../../../components/Base/Input/Input";

const Create = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(["https://fakeimg.pl/350x250/"]);
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [city_name, setCity_name] = useState("");
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState([
    "https://fakeimg.pl/350x250/",
  ]);

  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      image.length == 0 ||
      name.length == 0 ||
      alias.length == 0 ||
      city_name.length == 0
    ) {
      setError(true);
    }
    if (name && image && alias && city_name) {
      const data = new FormData();
      data.append("name", name);
      data.append("image", image);
      data.append("alias", alias);
      data.append("city_name", city_name);
      e.preventDefault();
      dispatch(createCountry(data, navigate));
      Swal.fire({
        icon: "success",
        title: "Berhasil mengupload country",
        text: `country : ${name}`,
      });
      //  navigate("/productList");
      // dispatch(createProduct(data));
    }
  };
  console.log(image);
  console.log(alias);
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    setImagePreview(URL.createObjectURL(file));
  };
  return (
    <div id="wrapper">
      <Sidebar activecountry="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Create Country</h1>
        </div>
        <form action="" onSubmit={onSubmit}>
          <div>
            {" "}
            <div className="ml-3 mr-3 row">
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Name
                </label>
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="input name"
                />
                {error && name.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Alias
                </label>
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={(e) => setAlias(e.target.value)}
                />
                {error && alias.length <= 0 ? (
                  <label className="text-danger">Alias can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  City Name
                </label>
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={(e) => setCity_name(e.target.value)}
                />
                {error && city_name.length <= 0 ? (
                  <label className="text-danger">
                    City Name can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Image
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="firstName"
                  required
                />
                {error && image.length <= 0 ? (
                  <label className="text-danger">Image can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Link to="/country">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To Country
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
