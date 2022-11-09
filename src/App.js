import Home from "./pages/Home";
import Note from "./pages/Note";
import React, { useState } from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className='bg-secondary h-screen'>
      <AuthContext.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path='auth' element={<Home />} />
          <Route path='auth/login' element={<Login />} />
          <Route path='auth/signup' element={<Signup />} />
          <Route path='/' element={<Note />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
