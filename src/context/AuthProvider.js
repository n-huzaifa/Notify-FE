import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ childern }) {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {childern}
    </AuthContext.Provider>
  );
}

export default AuthContext;
