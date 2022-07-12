/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCountry } from "../../../configs/redux/actions/countryActions";


const Create = () => {
   const navigate = useNavigate();
   const [image, setImage] = useState(["https://fakeimg.pl/350x250/"]);
   const [name, setName] = useState("");
   const [alias,setAlias] = useState("");
   const [city_name,  setCity_name] = useState("");
   const dispatch = useDispatch();
   const [imagePreview, setImagePreview] = useState([
     "https://fakeimg.pl/350x250/",
   ]);

   
   const onSubmit = (e) => {
     const data = new FormData();
     data.append("name", name);
     data.append("image", image);
     data.append("alias", alias);
     data.append("city_name", city_name);
     e.preventDefault();
     dispatch(createCountry(data, navigate));
     alert("yess berhasil");
     //  navigate("/productList");
     // dispatch(createProduct(data));
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
      <Sidebar />
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
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Alias
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  city Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={(e) => setCity_name(e.target.value)}
                  placeholder="you@example.com"
                />
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
