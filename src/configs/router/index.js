import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightsAdmin from "../../pages/admin/flights";
import Airlanes from "../../pages/admin/airlanes";
import Country from "../../pages/admin/country";
import FlightsDetail from "../../pages/admin/flights/detail";
import FlightsCreate from "../../pages/admin/flights/create";
import FlightsEdit from "../../pages/admin/flights/edit";
import CountryDetail from "../../pages/admin/country/detail";
import CountryCreate from "../../pages/admin/country/create";
import CountryEdit from "../../pages/admin/country/edit";
import AirlanesDetail from "../../pages/admin/airlanes/detail";
import AirlanesCreate from "../../pages/admin/airlanes/create";
import AirlanesEdit from "../../pages/admin/airlanes/edit";
import Login from "../../pages/admin/auth/login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/login" element={<Login />} />
        {/* airlanes */}
        <Route path="/airlanes" element={<Airlanes />} />
        <Route path="/detailAirlanes/:id" element={<AirlanesDetail />} />
        <Route path="/airlanes/create" element={<AirlanesCreate />} />
        <Route path="/editAirlanes/:id" element={<AirlanesEdit />} />
        {/* country */}
        <Route path="/country" element={<Country />} />
        <Route path="/detail/:id" element={<CountryDetail />} />
        <Route path="/country/create" element={<CountryCreate />} />
        <Route path="/editCountry/:id" element={<CountryEdit />} />
        {/* flights */}
        <Route path="/flights" element={<FlightsAdmin />} />
        <Route path="/flights/detail" element={<FlightsDetail />} />
        <Route path="/flights/create" element={<FlightsCreate />} />
        <Route path="/flights/edit" element={<FlightsEdit />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
