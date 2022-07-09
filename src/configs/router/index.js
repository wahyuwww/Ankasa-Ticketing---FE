import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightsAdmin from "../../pages/admin/flights";
import Airlanes from "../../pages/admin/airlanes";
import Country from "../../pages/admin/country";
import FlightsDetail from "../../pages/admin/flights/detail";
import FlightsCreate from "../../pages/admin/flights/create";
import FlightsEdit from "../../pages/admin/flights/edit";
import Login from "../../pages/admin/auth/login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/flights" replace="true" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flights" element={<FlightsAdmin />} />
        {/* airlanes */}
        <Route path="/airlanes" element={<Airlanes />} />
        {/* country */}
        <Route path="/country" element={<Country />} />
        {/* flights */}
        <Route path="/flights/detail" element={<FlightsDetail />} />
        <Route path="/flights/create" element={<FlightsCreate />} />
        <Route path="/flights/edit" element={<FlightsEdit />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
