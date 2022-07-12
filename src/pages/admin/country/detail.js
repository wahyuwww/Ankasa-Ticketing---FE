/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link,useParams } from "react-router-dom";
import { cartAction } from "../../../configs/redux/actions/cartsAction";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
   const { id } = useParams();

   const dispatch = useDispatch();
   const { data } = useSelector((state) => state.cart);
   const { name, alias, city_name, city_image } = data;
   console.log(data);
   // };
   useEffect(() => {
     dispatch(cartAction(id));
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">
            Detail Country {name}
          </h1>
        </div>
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/country">
            <a href="" className="btn btn-success">
              Kembali
            </a>
          </Link>
        </div>
        <div className="ml-1 row">
          <div className="col-md-6">
            <div className="box">
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td width="30%" classname="text-primary">
                        <h6 className="text-primary">Name</h6>
                      </td>
                      <td width="5%">:</td>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Alias</h6>
                      </td>
                      <td>:</td>
                      <td>{alias}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">City Name</h6>
                      </td>
                      <td>:</td>
                      <td>{city_name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <div className="box-header with-border " />
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Image</h6>
                      </td>
                      <td>:</td>
                      <td>
                        <img width="150px" src={city_image} alt="img" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div id="content"></div>
      </div>
    </div>
  );
};

export default Detail;
