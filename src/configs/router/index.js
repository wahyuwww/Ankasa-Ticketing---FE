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
import RequireAuth from "../../components/Base/RequireAuth";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/login" element={<Login />} />
        {/* airlanes */}
        <Route
          path="/airlanes"
          element={
            <RequireAuth>
              {" "}
              <Airlanes />
            </RequireAuth>
          }
        />
        <Route
          path="/detailAirlanes/:id"
          element={
            <RequireAuth>
              {" "}
              <AirlanesDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/airlanes/create"
          element={
            <RequireAuth>
              {" "}
              <AirlanesCreate />
            </RequireAuth>
          }
        />
        <Route
          path="/editAirlanes/:id"
          element={
            <RequireAuth>
              {" "}
              <AirlanesEdit />
            </RequireAuth>
          }
        />
        {/* country */}
        <Route
          path="/country"
          element={
            <RequireAuth>
              {" "}
              <Country />
            </RequireAuth>
          }
        />
        <Route
          path="/detailCountry/:id"
          element={
            <RequireAuth>
              {" "}
              <CountryDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/country/create"
          element={
            <RequireAuth>
              {" "}
              <CountryCreate />
            </RequireAuth>
          }
        />
        <Route
          path="/editCountry/:id"
          element={
            <RequireAuth>
              {" "}
              <CountryEdit />
            </RequireAuth>
          }
        />
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
