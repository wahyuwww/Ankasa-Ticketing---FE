import { combineReducers } from 'redux';
import {
  airlanesReducer,
  CreateairlanesReducer,
  selectedairlanesReducer,
  DeleteAirlanesReducer,
  UpdateairlanesReducer,
  airlaneReducer,
  dataAirlanes,
} from "./airlanes";
import { userReducer } from "./userReducer";
import { cartReducer, todosReducer } from "./cartReducer";
import { cartsReducer } from "./cartsReducer";

import {
  countryReducer,
  CreatecountryReducer,
  selectedcountryReducer,
  DeleteCountryReducer,
  UpdatecountryReducer,
  countrysReducer,
  dataCountry,
} from "./country";

const rootReducers = combineReducers({
  auth: userReducer,

  CreateAirlanes: CreateairlanesReducer,
  allAirlanes: airlanesReducer,
  dataAirlanes: dataAirlanes,
  airlanes: airlaneReducer,
  deleteAirlanes: DeleteAirlanesReducer,
  airlane: selectedairlanesReducer,
  updateAirlanes: UpdateairlanesReducer,
  carts: cartReducer,
  todo: todosReducer,

  CreateCountry: CreatecountryReducer,
  allCountry: countryReducer,
  dataCountry: dataCountry,
  countrys: countrysReducer,
  deleteCountry: DeleteCountryReducer,
  country: selectedcountryReducer,
  updateCountry: UpdatecountryReducer,
  cart: cartsReducer,
});

export default rootReducers;
