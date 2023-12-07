// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Meeting from "./pages/Meeting";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <>
  <Main></Main>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes> */}
    </>
  );
}

export default App;
