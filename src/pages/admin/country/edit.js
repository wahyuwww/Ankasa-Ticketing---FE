/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios"
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateCountry } from "../../../configs/redux/actions/countryActions";

const Edit = () => {
const navigate = useNavigate();
const [name, setName] = useState("");
const [alias, setAlias] = useState("");
const [city_name, setCity_name] = useState("");
const [imagePreview, setImagePreview] = useState("https://fakeimg.pl/350x200/");
const [image, setImage] = useState(imagePreview);

// const {isLoading} = useSelector((state) => state.update);
const dispatch = useDispatch();
  const [error, setError] = useState(false);
const { id } = useParams();
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
        axios
          .put(
            `${process.env.REACT_APP_API_BACKEND}/country/updatecountry/${id}`,
            data,
            {
              "content-type": "multipart/form-data",
            }
          )
          .then((res) => {
            dispatch(updateCountry(res));
            navigate("/country");
            Swal.fire({
              icon: "success",
              title: "Berhasil mengupdate country",
              text: `country : ${name}`,
            });
          })
          .catch((err) => {
             Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "data yang anda inputkan salah",
             });
            console.log(err);
          });
      }
  
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
       `${process.env.REACT_APP_API_BACKEND}/country/detailcountry/${id}`
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
      <Sidebar activecountry="active" />
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
                  placeholder="Input name"
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
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="input alias"
                />
                {error && alias.length <= 0 ? (
                  <label className="text-danger">alias can't be Empty</label>
                ) : (
                  ""
                )}
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
                  placeholder="input city name"
                />
                {error && city_name.length <= 0 ? (
                  <label className="text-danger">
                    city_name can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="firstName" className="form-label ml-3">
                  Image
                </label>
                <br />
                <img
                  src={imagePreview}
                  alt="Bootstrap"
                  className="img-fluid mb-2"
                />
                <input
                  type="file"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="image"
                />
                {error && image.length <= 0 ? (
                  <label className="text-danger">image can't be Empty</label>
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

export default Edit;
