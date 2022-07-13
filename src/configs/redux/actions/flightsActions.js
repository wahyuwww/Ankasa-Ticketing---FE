import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import Swal from "sweetalert2" 


export const setFlights = (flights) => {
  return {
    type: ActionTypes.SET_FLIGHTS,
    payload: flights,
  };
};


export const selectedFlights = (flights) => {
  return {
    type: ActionTypes.SELECTED_FLIGHTS,
    payload: flights,
  };
};
export const updateFlights = (flights) => {
  return {
    type: ActionTypes.UPDATE_FLIGHTS,
    payload: flights,
  };
};

export const createFlights = (data, navigate) => async (dispacth) => {
  try {
    dispacth({ type: ActionTypes.ADD_AIRLANES_PENDING });
    const createdAt = await axios.post(
      ` ${process.env.REACT_APP_API_BACKEND}/flight/newflights`,
      data,
      {
        "content-type": "multipart/form-data",
      }
    );
    navigate("/flights");
    Swal.fire({
      icon: "success",
      title: "Upload flights success",
      text: `flights `,
    });
    dispacth({ type: ActionTypes.CREATE_FLIGHTS, payload: createdAt });
  } catch (error) {
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "Your Airlines are under suspended",
     });
    dispacth({ type: ActionTypes.GET_FLIGHTS_ERROR, payload: error.response });
  }
};

export const deleteFlights = (flights) => {
  return {
    type: ActionTypes.DELETE_FLIGHTS,
    payload: flights,
  };
};

