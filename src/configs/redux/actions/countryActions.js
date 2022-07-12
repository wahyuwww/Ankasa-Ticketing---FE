import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const setCountry = (country) => {
  return {
    type: ActionTypes.SET_COUNTRY,
    payload: country,
  };
};

export const selectedCountry = (country) => {
  return {
    type: ActionTypes.SELECTED_COUNTRY,
    payload: country,
  };
};
export const updateCountry = (country) => {
  return {
    type: ActionTypes.UPDATE_COUNTRY,
    payload: country,
  };
};

export const createCountry = (data, navigate) => async (dispacth) => {
  try {
    dispacth({ type: ActionTypes.ADD_COUNTRY_PENDING });
    const createdAt = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/country/newcountry`,
      data,
      {
        "content-type": "multipart/form-data",
      }
    );
    navigate("/country");
    console.log(createdAt)
    dispacth({ type: ActionTypes.CREATE_COUNTRY, payload: createdAt });
  } catch (error) {
    dispacth({ type: ActionTypes.GET_COUNTRY_ERROR, payload: error.response });
  }
};

// export const updateProduct = (data) => async (dispacth) => {
//   const { id } = useParams()
//   try {
//     dispacth({ type: ActionTypes.ADD_PRODUCTS_PENDING });
//     const createdAt = await axios
//           .put(`${process.env.REACT_APP_API_BACKEND}/products/${id}`, data, {
//             "content-type": "multipart/form-data",
//           }
//     );
//     dispacth({ type: ActionTypes.UPDATE_PRODUCTS, payload: createdAt });
//   } catch (error) {
//     dispacth({ type: ActionTypes.GET_PRODUCT_ERROR, payload: error.response });
//   }
// };

export const deleteCountry = (country) => {
  return {
    type: ActionTypes.DELETE_AIRLANES,
    payload: country,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_COUNTRY,
  };
};
