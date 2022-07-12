import { ActionTypes } from "../constants/action-types";
import axios from "axios";


export const setAirlanes = (airlanes) => {
  return {
    type: ActionTypes.SET_AIRLANES,
    payload: airlanes,
  };
};


export const selectedAirlanes = (airlanes) => {
  return {
    type: ActionTypes.SELECTED_AIRLANES,
    payload: airlanes,
  };
};
export const updateAirlanes = (airlanes) => {
  return {
    type: ActionTypes.UPDATE_AIRLANES,
    payload: airlanes,
  };
};

export const getDetail = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_PENDING" });
  const data = await axios
    .get(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
    .catch((err) => {
      console.log(err);
    });
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: data });
};

export const createAirlanes = (data, navigate) => async (dispacth) => {
  try {
    dispacth({ type: ActionTypes.ADD_AIRLANES_PENDING });
    const createdAt = await axios.post(
      ` ${process.env.REACT_APP_API_BACKEND}/airlanes/newairlanes`,
      data,
      {
        "content-type": "multipart/form-data",
      }
    );
    navigate("/airlanes");
    dispacth({ type: ActionTypes.CREATE_AIRLANES, payload: createdAt });
  } catch (error) {
    alert('eror')
    dispacth({ type: ActionTypes.GET_AIRLANES_ERROR, payload: error.response });
  }
};

export const deleteAirlanes = (airlanes) => {
  return {
    type: ActionTypes.DELETE_AIRLANES,
    payload: airlanes,
  };
};

