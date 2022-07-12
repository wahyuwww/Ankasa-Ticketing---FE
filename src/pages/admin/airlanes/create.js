/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link,useNavigate } from "react-router-dom";
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

  const onSubmit = (e) => {
    const data = new FormData();
    data.append("name", name);
    data.append("image", image);
    e.preventDefault();
    dispatch(createAirlanes(data, navigate));
    alert("yess berhasil")
    //  navigate("/productList");
    // dispatch(createProduct(data));
  };
  console.log(image)
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
              </div>
              <div className="col-6 mt-2">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Active
                </label>
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>active</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
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
