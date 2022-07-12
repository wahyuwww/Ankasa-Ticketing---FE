/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link,useParams } from "react-router-dom";
import { detailCostemerAction } from "../../../configs/redux/actions/detailCostemerAction";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
   const { id } = useParams();

   const dispatch = useDispatch();
   const { data } = useSelector((state) => state.detail);
  //  const { username, name, phone_number, city,address,post_code,photo,is_active,level } = data;
   console.log(data);
   // };
   useEffect(() => {
     dispatch(detailCostemerAction(id));
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  return (
    <div id="wrapper">
      <Sidebar activeusers="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Detail User {data[0].name}</h1>
        </div>
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/users">
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
                      <td>{data[0].name}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Username</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].username}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">No HP</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].phone_number}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">City</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].city}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Address</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].address}</td>
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
                        <h6 className="text-primary">Post Code</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].post_code}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Photo Profil</h6>
                      </td>
                      <td>:</td>
                      <td>
                        <img width="150px" src={data[0].photo} alt="img" />
                      </td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Active</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].is_active ? "active" : "non active"}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Level</h6>
                      </td>
                      <td>:</td>
                      <td>{data[0].level}</td>
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
