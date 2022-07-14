import { ActionTypes } from "../constants/action-types";
const intialState = {
  booking: [],
  isLoading: false,
};

const inisial = {
  booking: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};

export const CreatebookingReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_BOOKING_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_BOOKING:
      return {
        ...state,
        airlanes: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteBookingReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.DELETE_BOOKING:
      // console.log(payload.data.data);
      return { ...state, booking: payload.data.data };
    // return state.filter(
    //   (AIRLANES) =>
    //     console.log(product)
    //     // product.data.data.id !== payload.data.data
    // );
    default:
      return state;
  }
};
export const UpdateBookingReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.UPDATE_BOOKING:
      return { ...state, booking: payload.data.data };
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

export const selectedBookingReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_BOOKING:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const BookingReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BOOKING:
      return { ...state, booking: payload };
    default:
      return state;
  }
};

export const dataBooking = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return { ...state, pagination: action.payload };
    case ActionTypes.SET_BOOKING:
      return { ...state, booking: action.payload };
    default:
      return state;
  }
};
export const BookingsReducer = (state = inisial, action) => {
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
