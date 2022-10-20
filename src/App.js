import React from "react";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className='bg-secondary h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
