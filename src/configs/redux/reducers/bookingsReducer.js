import { ActionTypes } from "../constants/action-types";
const initialState = {
  data: [],
};

// export const cartReducer = (state = initialState, action) => {
//   if (action.type === "ADD_TO_CART") {
//     return {
//       ...state,
//       data: [...state.data, action.payload],
//     };
//   } else {
//     return state;
//   }
// };

export const bookingdetailAction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BAG:
      return { ...state, data: payload.data.data };
    default:
      return state;
  }
};
