import { ActionTypes } from "../constants/action-types";
const intialState = {
  airlanes: [],
  isLoading: false,
};

const inisial = {
  airlanes: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};

export const CreateairlanesReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_AIRLANES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_AIRLANES:
      return {
        ...state,
        airlanes: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteAirlanesReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.DELETE_AIRLANES:
      // console.log(payload.data.data);
      return { ...state, airlanes: payload.data.data };
    // return state.filter(
    //   (AIRLANES) =>
    //     console.log(product)
    //     // product.data.data.id !== payload.data.data
    // );
    default:
      return state;
  }
};
export const UpdateairlanesReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.UPDATE_AIRLANES:
      return { ...state, airlanes: payload.data.data };
    default:
      return state;
  }
};

export const selectedairlanesReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_AIRLANES:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const airlanesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_AIRLANES:
      return { ...state, airlanes: payload };
    default:
      return state;
  }
};

export const dataAirlanes = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return { ...state, pagination: action.payload };
    case ActionTypes.SET_AIRLANES:
      return { ...state, airlanes: action.payload };
    default:
      return state;
  }
};
export const airlaneReducer = (state = inisial, action) => {
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
