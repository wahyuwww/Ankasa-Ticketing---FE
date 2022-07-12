/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios"

import { useDispatch } from "react-redux";
import { updateCountry } from "../../../configs/redux/actions/countryActions";

const Edit = () => {
const navigate = useNavigate();
 const [image, setImage] = useState(["https://fakeimg.pl/350x250/"]);
 const [name, setName] = useState("");
 const [alias, setAlias] = useState("");
 const [city_name, setCity_name] = useState("");
const [imagePreview, setImagePreview] = useState("https://fakeimg.pl/350x200/");

// const {isLoading} = useSelector((state) => state.update);
const dispatch = useDispatch();

const { id } = useParams();
const onSubmit = (e) => {
  const data = new FormData();
  data.append("name", name);
  data.append("image", image);
  data.append("alias", alias);
  data.append("city_name", city_name);
  e.preventDefault();
  axios
    .put(
      `https://avtur-ankasa-ticketing.herokuapp.com/v1/admin/country/updatecountry/${id}`,
      data,
      {
        "content-type": "multipart/form-data",
      }
    )
    .then((res) => {
      dispatch(updateCountry(res));
      navigate("/country");
    })
    .catch((err) => {
      console.log(err);
    });
};

const onImageUpload = (e) => {
  const file = e.target.files[0];
  setImage(file);
  setImagePreview(URL.createObjectURL(file));
  console.log(URL.createObjectURL(file));
  };
   useEffect(() => {
     getProductById();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const getProductById = async () => {
     const response = await axios.get(
       `https://avtur-ankasa-ticketing.herokuapp.com/v1/admin/country/detailcountry/${id}`
     );
     console.log(response);
     setImagePreview(response.data.data.city_image);
     // setImage(response.data.data.image)
     setName(response.data.data.name);
     setAlias(response.data.data.alias);
     setCity_name(response.data.data.city_name);
   };
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Country</h1>
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
                  value={name}
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
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Name City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={city_name}
                  onChange={(e) => setCity_name(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="firstName" className="form-label ml-3">
                  Image
                </label>
                <br/>
                <img
                  src={imagePreview}
                  alt="Bootstrap"
                  className="img-fluid mb-2"
                />
                <input
                  type="file"
                  className="form-control"
                  id="firstName"
                  required
                  onChange={(e) => onImageUpload(e)}
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

export default Edit;
