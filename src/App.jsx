import React, { useState } from "react";
import Navbar from "./compoents/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import Cars from "./pages/Cars";
import MyBookings from "./pages/myBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  console.log(isOwnerPath);
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details" element={<CarDetail />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-booking" element={<MyBookings />} />
      </Routes>
    </>
  );
};

export default App;
