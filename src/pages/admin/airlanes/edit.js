/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateAirlanes } from "../../../configs/redux/actions/airlanesActions";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imagePreview, setImagePreview] = useState(
    "https://fakeimg.pl/350x200/"
  );
  const [image, setImage] = useState(imagePreview);

  // const {isLoading} = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const { id } = useParams();


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
      axios
        .put(
          `${process.env.REACT_APP_API_BACKEND}/airlanes/updateairlines/${id}`,
          data,
          {
            "content-type": "multipart/form-data",
          }
        )
        .then((res) => {
          dispatch(updateAirlanes(res));
          navigate("/airlanes");
           Swal.fire({
             icon: "success",
             title: "Berhasil mengupdate airlanes",
             text: `airlanes : ${name}`,
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
  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };
  const getProductById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/airlanes/detailairlanes/${id}`
    );
    console.log(response.data.data.image);
    setImagePreview(response.data.data.image);
    // setImage(response.data.data.image)
    setName(response.data.data.name);
  };

  return (
    <div id="wrapper">
      <Sidebar activeairlanes="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div class="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Airlanes</h1>
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
                  id="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="input name"
                />
                {error && name.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <br />
                <img
                  src={imagePreview}
                  alt="Bootstrap"
                  className="img-fluid "
                />
                <input
                  type="file"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="image"
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
