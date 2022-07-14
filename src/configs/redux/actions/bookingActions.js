import { ActionTypes } from "../constants/action-types";



export const setBooking = (booking) => {
  return {
    type: ActionTypes.SET_BOOKING,
    payload: booking,
  };
};


export const selectedBooking = (booking) => {
  return {
    type: ActionTypes.SELECTED_AIRLANES,
    payload: booking,
  };
};
export const updateBooking = (booking) => {
  return {
    type: ActionTypes.UPDATE_AIRLANES,
    payload: booking,
  };
};


export const deleteBooking = (booking) => {
  return {
    type: ActionTypes.DELETE_BOOKING,
    payload: booking,
  };
};
