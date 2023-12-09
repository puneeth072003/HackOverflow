// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import OffCanvas from "./components/OffCanvas";
import "./App.css";
import Schedules from "./components/Schedules";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<OffCanvas />}>
          <Route index element={<Schedules />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
