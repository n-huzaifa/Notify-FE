import React from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='auth' element={<Login />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
