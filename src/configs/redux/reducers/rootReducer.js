import { combineReducers } from "redux";
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
import { airlanesDetailReducer } from "./airlanesDetailReducer";
import { countryDetailReducer } from "./countrydetailReducer";
import { costemerDetailReducer } from "./costemerDetailReducer";
import { bookingdetailAction } from "./bookingsReducer";
import { flightsDetailReducer } from "./flightsDetailReducer";

import {
  countryReducer,
  CreatecountryReducer,
  selectedcountryReducer,
  DeleteCountryReducer,
  UpdatecountryReducer,
  countrysReducer,
  dataCountry,
} from "./country";

import {
  BookingReducer,
  CreatebookingReducer,
  selectedBookingReducer,
  DeleteBookingReducer,
  UpdateBookingReducer,
  BookingsReducer,
  dataBooking,
} from "./booking";
import {
  customerReducer,
  CreatecustomerReducer,
  selectedcustomerReducer,
  DeleteCustomerReducer,
  UpdateCustomerReducer,
  dataCustomer,
} from "./customer";
import {
  flightsReducer,
  CreateflightsReducer,
  selectedflightsReducer,
  DeleteFlightsReducer,
  UpdateflightsReducer,
  dataflights,
} from "./flights";

const rootReducers = combineReducers({
  auth: userReducer,

  CreateAirlanes: CreateairlanesReducer,
  allAirlanes: airlanesReducer,
  dataAirlanes: dataAirlanes,
  airlanes: airlaneReducer,
  deleteAirlanes: DeleteAirlanesReducer,
  airlane: selectedairlanesReducer,
  updateAirlanes: UpdateairlanesReducer,
  carts: airlanesDetailReducer,

  CreateCountry: CreatecountryReducer,
  allCountry: countryReducer,
  dataCountry: dataCountry,
  countrys: countrysReducer,
  deleteCountry: DeleteCountryReducer,
  country: selectedcountryReducer,
  updateCountry: UpdatecountryReducer,
  cart: countryDetailReducer,

  CreateBooking: CreatebookingReducer,
  allBooking: BookingReducer,
  dataBooking: dataBooking,
  bookings: BookingsReducer,
  deleteBooking: DeleteBookingReducer,
  booking: selectedBookingReducer,
  updateBooking: UpdateBookingReducer,
  bookingdetail: bookingdetailAction,

  CreateCustomer: CreatecustomerReducer,
  allCustomer: customerReducer,
  dataCustomer: dataCustomer,
  deleteCustomer: DeleteCustomerReducer,
  customer: selectedcustomerReducer,
  updateCustomer: UpdateCustomerReducer,
  detail: costemerDetailReducer,

  CreateFlights: CreateflightsReducer,
  allFlights: flightsReducer,
  dataFlights: dataflights,
  deleteFlights: DeleteFlightsReducer,
  Flights: selectedflightsReducer,
  updateFlights: UpdateflightsReducer,
  detailFlights: flightsDetailReducer,
});

export default rootReducers;
