import { ActionTypes } from "../constants/action-types";
const intialState = {
  customer: [],
  isLoading: false,
};

const inisial = {
  customer: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};

export const CreatecustomerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_AIRLANES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_CUSTOMER:
      return {
        ...state,
        airlanes: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteCustomerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DELETE_CUSTOMER:
      // console.log(payload.data.data);
      return { ...state, customer: payload.data.data };
    // return state.filter(
    //   (AIRLANES) =>
    //     console.log(product)
    //     // product.data.data.id !== payload.data.data
    // );
    default:
      return state;
  }
};
export const UpdateCustomerReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.UPDATE_CUSTOMER:
      return { ...state, customer: payload.data.data };
    default:
      return state;
  }
};

export const selectedcustomerReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_CUSTOMER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const customerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CUSTOMER:
      return { ...state, customer: payload };
    default:
      return state;
  }
};

export const dataCustomer = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return { ...state, pagination: action.payload };
    case ActionTypes.SET_CUSTOMER:
      return { ...state, customer: action.payload };
    default:
      return state;
  }
};

