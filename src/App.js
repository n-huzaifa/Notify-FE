import React from "react";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='bg-secondary h-screen'>
      <Routes>
        <Route path='auth' element={<Home />} />
        <Route path='auth/login' element={<Login />} />
        <Route path='auth/signup' element={<Signup />} />
        <Route path='/' element={<Note />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
