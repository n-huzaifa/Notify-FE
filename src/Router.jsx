import React from "react";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
