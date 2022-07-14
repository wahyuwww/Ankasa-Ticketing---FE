/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateBooking } from "../../../configs/redux/actions/bookingActions";
import Input from "../../../components/Base/Input/Input";
import Button from "../../../components/Base/Button/Button";

const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [full_name,  setFull_name] = useState("");
  const [nationality, setNationality] = useState("");
  const [insurance, setInsurance] = useState(null);
  const [payment_status, setPayment_status] = useState("");
  const [total_payment, setTotal_payment] = useState("");

  // const {isLoading} = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const { id } = useParams();
  

  
  const onSubmits = (e) => {
      const data = new FormData();
      data.append("total_payment", total_payment);
      data.append("payment_status", payment_status);
      data.append("full_name", full_name);
      data.append("title", title);
      data.append("insurance", insurance);
      data.append("nationality", nationality);
      e.preventDefault();
      axios
        .put(
          `${process.env.REACT_APP_API_BACKEND}/booking/editbooking/${id}`,
          data
        )
        .then((res) => {
           Swal.fire({
             icon: "success",
             title: "Berhasil mengupdate booking",
             text: `booking : ${full_name}`,
           });
          dispatch(updateBooking(res));
          navigate("/booking");
        })
        .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "data yang anda inputkan salah",
            });
          console.log(err);
        });
  };
  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log(insurance);
  const getProductById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/booking/detailbooking/${id}`
    );
    console.log(response.data.data);
    // setImage(response.data.data.image)
    setFull_name(response.data.data.full_name);
    setTitle(response.data.data.title);
    setNationality(response.data.data.nationality);
    setTotal_payment(response.data.data.total_payment);
    setInsurance(response.data.data.travel_insurance);
    setPayment_status(response.data.data.payment_status);
  };

  return (
    <div id="wrapper">
      <Sidebar activebooking="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Booking</h1>
        </div>
        <form action="" onSubmit={onSubmits}>
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
                  id="text"
                  value={full_name}
                  onChange={(e) => setFull_name(e.target.value)}
                />
                {error && full_name.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                  Payment Status
                </label>
                <select
                  name={payment_status}
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value={payment_status}
                  onChange={(e) => setPayment_status(e.target.value)}
                >
                  <option value="0">PENDING</option>
                  <option value="1">SUCCESS</option>
                </select>
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Title
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {error && title.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Insurance
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value={insurance}
                  placeholder="insurance"
                  onChange={(e) => setInsurance(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Nationality
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
                {error && nationality.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Total payment
                </label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  id="text"
                  value={total_payment}
                  onChange={(e) => setTotal_payment(e.target.value)}
                />
              </div>
            </div>
            <Link to="/booking">
              <Button
                title="Back To booking"
                className="ml-4 mt-3 btn btn-warning"
              />
            </Link>
            <Button title="Submit" className="ml-4 mt-3 btn btn-primary" />
          </div>
        </form>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Edit;
