import axios from "axios"
import { ActionTypes } from "../constants/action-types";

export const detailCostemerAction = (id) => async (dispatch) => {
  dispatch({ type: "ADD_TODO_PENDING" });
  const data = await axios
    .get(
      `https://avtur-ankasa-ticketing.herokuapp.com/v1/admin/users/detailusers/${id}`
    )
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  dispatch({ type: ActionTypes.ADD_BAG, payload: data });
};