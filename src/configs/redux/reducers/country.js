import { ActionTypes } from "../constants/action-types";
const intialState = {
  country: [],
  isLoading: false,
};

const inisial = {
  country: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};

export const CreatecountryReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_COUNTRY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_COUNTRY:
      return {
        ...state,
        country: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteCountryReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.DELETE_COUNTRY:
      // console.log(payload.data.data);
      return { ...state, country: payload.data.data };
    // return state.filter(
    //   (AIRLANES) =>
    //     console.log(product)
    //     // product.data.data.id !== payload.data.data
    // );
    default:
      return state;
  }
};
export const UpdatecountryReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.UPDATE_COUNTRY:
      return { ...state, country: payload.data.data };
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

export const selectedcountryReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_COUNTRY:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const countryReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COUNTRY:
      return { ...state, country: payload };
    default:
      return state;
  }
};

export const dataCountry = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return { ...state, pagination: action.payload };
    case ActionTypes.SET_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
export const countrysReducer = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.GET_COUNTRY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_COUNTRY_SUCCESS: {
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
