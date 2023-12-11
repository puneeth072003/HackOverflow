// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import OffCanvas from "./components/OffCanvas";
import Schedules from "./components/Schedules";
import BusinessCards from "./components/BusinessCards";
import Transcript from "./components/Transcript";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<OffCanvas />}>
          <Route index element={<Schedules />} />
          <Route path="features" element={<BusinessCards />} />
          <Route path="transcript" element={<Transcript />} />
          <Route
            path="more"
            element={
              <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[2.5rem] py-[1rem] font-[600]">
                More Features are yet to Come !!!
              </h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
