/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFlights } from "../../../configs/redux/actions/flightsActions";
import axios from "axios";
import Swal from "sweetalert2"
import { setAirlanes } from "../../../configs/redux/actions/airlanesActions";
import { setCountry } from "../../../configs/redux/actions/countryActions";
import Title from "../../../components/Base/Title-page";


const Edit = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
      airline_id: "",
      origin_city: "",
      destination_city: "",
      departure_time: "",
      arrival_time: "",
      code: "",
      classf: "",
      departure_date: "",
      transit: "",
      meal: "",
      price: "",
      lugage: "",
      wifi: "",
      gate: "",
      terminal: "",
      stock: "",
    });
  console.log(form.departure_date);
    const dispatch = useDispatch();
    const airlanes = useSelector((state) => state.allAirlanes.airlanes);
    console.log(airlanes);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
    console.log(airlanes);

  const { id } = useParams();
  const onSubmit = (e) => {
     e.preventDefault();
     axios
       .put(
         `${process.env.REACT_APP_API_BACKEND}/flight/updateflights/${id}`,
         form
       )
       .then((res) => {
         dispatch(updateFlights(res));
         navigate("/flights");
         Swal.fire({
           icon: "success",
           title: "Berhasil mengupdate flights",
           text: `flights`,
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
  };

    useEffect(() => {
      getProductById();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const getProductById = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}/flight/detailflights/${id}`
      );
      console.log(response);
      setForm(response.data.data)
  
    };
  
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

    const country = useSelector((state) => state.allCountry.country);
    const fetchDataCountry = async () => {
      const response = await axios
        .get(`${process.env.REACT_APP_API_BACKEND}/country/getcountry`)
        .catch((err) => {
          console.log(err);
        });
      console.log(response);
      dispatch(setCountry(response.data.data));
    };
    useEffect(() => {
      fetchDataCountry();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <Title title="Edit Flights" />
        <form action="" onSubmit={onSubmit}>
          <div className="mb-5">
            {" "}
            <div className="ml-3 mr-3 row">
              <div class="col-12 mt-3">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Airlanes
                </label>
                <select
                  name="airline_id"
                  value={form.airline_id}
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected disabled>
                    Airlanes
                  </option>
                  {airlanes.map((item) => (
                    <option key={item.id} value={item.name} selected>
                      {item.name} - (
                      {item.is_active === 1 ? "active" : "non active"})
                    </option>
                  ))}
                </select>
              </div>
              <div class="col-6 mt-3">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Departure city
                </label>
                <select
                  name="origin_city"
                  value={form.origin_city}
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option selected disabled>
                    -- Departure city --
                  </option>
                  {country.map((items) => (
                    <option key={items.id} value={items.city_name}>
                      {items.city_name}
                    </option>
                  ))}
                </select>
                {error && form.origin_city.length <= 0 ? (
                  <label className="text-danger">
                    departure city can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div class="col-6 mt-3">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Arrival city
                </label>
                <select
                  name="destination_city"
                  value={form.destination_city}
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option selected disabled>
                    --Arrival City--
                  </option>
                  {country.map((items) => (
                    <option key={items.id} value={items.city_name}>
                      {items.city_name}
                    </option>
                  ))}
                </select>
                {error && form.destination_city.length <= 0 ? (
                  <label className="text-danger">
                    Arrival city can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="startDate" className="form-label">
                  Departure time
                </label>
                <input
                  value={form.departure_time}
                  onChange={handleChange}
                  name="departure_time"
                  id="startDate"
                  class="form-control"
                  type="time"
                  className="form-control"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="startDate" className="form-label">
                  Arrival time
                </label>
                <input
                  value={form.arrival_time}
                  onChange={handleChange}
                  id="startDate"
                  name="arrival_time"
                  class="form-control"
                  type="time"
                  className="form-control"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="startDate" className="form-label">
                  Depature date
                </label>
                <input
                  value={form.departure_date}
                  onChange={handleChange}
                  id="startDate"
                  name="departure_date"
                  class="form-control"
                  type="date"
                  className="form-control"
                  placeholder
                  required
                />
              </div>

              <div className="col-md-3 mt-2">
                <label
                  htmlFor="firstName"
                  className="form-label"
                  id="inlineFormCustomSelect"
                >
                  Lugage
                </label>
                <select
                  value={form.lugage}
                  onChange={handleChange}
                  name="lugage"
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">No Active</option>
                </select>
              </div>
              <div className="col-md-3 mt-2">
                <label
                  htmlFor="lastName"
                  className="form-label"
                  id="inlineFormCustomSelect"
                >
                  Wifi
                </label>
                <select
                  value={form.wifi}
                  name="wifi"
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Transit
                </label>
                <select
                  value={form.transit}
                  name="transit"
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>
              <div className="col-md-3 mt-2">
                <label
                  htmlFor="firstName"
                  id="inlineFormCustomSelect"
                  className="form-label"
                >
                  Meal
                </label>
                <select
                  value={form.meal}
                  name="meal"
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>

              <div className="col-md-3 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Code
                </label>
                <input
                  type="text"
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  className="form-control"
                  id="firstName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Class
                </label>
                <input
                  value={form.classf}
                  name="classf"
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Stock
                </label>
                <input
                  value={form.stock}
                  name="stock"
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  id="lastName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-3 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="form-control"
                  id="lastName"
                  placeholder
                  required
                />
              </div>
              <div className="col-md-6 mt-2">
                <label
                  htmlFor="firstName"
                  id="inlineFormCustomSelect"
                  className="form-label"
                >
                  Gate
                </label>
                <select
                  value={form.gate}
                  name="gate"
                  onChange={handleChange}
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="1">Active</option>
                  <option value="0">Non Active</option>
                </select>
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="address" className="form-label">
                  Terminal
                </label>
                <input
                  type="text"
                  name="terminal"
                  className="form-control"
                  id="address"
                  value={form.terminal}
                  onChange={handleChange}
                  placeholder="Juanda"
                  required
                />
              </div>
            </div>
            <Link to="/flights">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To Flights
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
