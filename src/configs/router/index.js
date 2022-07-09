

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightsAdmin from "../../pages/admin/flights";


function Router() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />} />
        <Route path="/flights" element={<FlightsAdmin />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router
