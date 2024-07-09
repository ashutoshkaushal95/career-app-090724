// src/contexts/AppContext.js
import React, { createContext, useState } from "react";
import { supabase } from "../supabase/supabase";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const isAuthenticated = () => {
    return localStorage.getItem("accessToken") !== null;
    // return localStorage.getItem("authToken") !== null;
  };

  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user?.email === "ashutoshkaushal2@gmail.com";
  };



  return (
    <AppContext.Provider value={{ isAuthenticated, isAdmin }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
