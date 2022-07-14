import { ActionTypes } from "../constants/action-types";


export const setCustomer = (customer) => {
  return {
    type: ActionTypes.SET_CUSTOMER,
    payload: customer,
  };
};


export const selectedCustomer = (customer) => {
  return {
    type: ActionTypes.SELECTED_CUSTOMER,
    payload: customer,
  };
};
export const updateCustomer = (customer) => {
  return {
    type: ActionTypes.UPDATE_CUSTOMER,
    payload: customer,
  };
};


export const deleteCustomer = (customer) => {
  return {
    type: ActionTypes.DELETE_CUSTOMER,
    payload: customer,
  };
};
