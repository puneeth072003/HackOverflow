// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import OffCanvas from "./components/OffCanvas";
import Final from "./components/Pages";
import "./App.css";
import Schedules from "./components/Schedules";
import BusinessCards from "./components/BusinessCards";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<OffCanvas />}>
          <Route index element={<Schedules />} />
          <Route path="features" element={<BusinessCards />} />
          <Route path="more" element={<h1 className="text-center text-[#FF007A] font-['Cairo'] text-[2.5rem] py-[1rem] font-[600]">
        More Features are yet to Come !!!
      </h1>} />
        </Route>
        <Route path="/transcribe" element={<Final />} />
      </Routes>
    </>
  );
}

export default App;
