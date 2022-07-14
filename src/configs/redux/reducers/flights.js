import { ActionTypes } from "../constants/action-types";
const intialState = {
  flights: [],
  isLoading: false,
};

const inisial = {
  flights: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};

export const CreateflightsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_FLIGHTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_FLIGHTS:
      return {
        ...state,
        flights: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteFlightsReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.DELETE_FLIGHTS:
      // console.log(payload.data.data);
      return { ...state, flights: payload.data.data };
    // return state.filter(
    //   (AIRLANES) =>
    //     console.log(product)
    //     // product.data.data.id !== payload.data.data
    // );
    default:
      return state;
  }
};
export const UpdateflightsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_FLIGHTS:
      return { ...state, flights: payload.data.data };
    // case ActionTypes.UPDATE_PRODUCTS:
    //   console.log(payload.data.data.name)
    //   return {
    //     ...state,
    //     product: state.product.map((item) => {
    //       return item === payload.data.data ? payload.data.data : item;
    //     })
    //   }
    //   console.log(...payload.name);
    //  return state.map((product) =>
    //    product.id === payload.id ? payload : product
    //  );
    default:
      return state;
  }
};

export const selectedflightsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_FLIGHTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const flightsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FLIGHTS:
      return { ...state, flights: payload };
    default:
      return state;
  }
};

export const dataflights = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return { ...state, pagination: action.payload };
    case ActionTypes.SET_AIRLANES:
      return { ...state, airlanes: action.payload };
    default:
      return state;
  }
};
export const flightReducer = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.GET_AIRLANES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_AIRLANES_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case ActionTypes.GET_AIRLANES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
