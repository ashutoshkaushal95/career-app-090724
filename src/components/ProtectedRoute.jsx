import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin } = useContext(AppContext);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-full w-full  flex flex-col items-center justify-between">
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <div className="flex flex-row h-full w-[100%] md:w-[75%] shadow overflow-y-auto">
        {/* <Sidebar /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedRoute;
