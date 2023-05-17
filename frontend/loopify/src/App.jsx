import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
function App() {
  return (
    <>
      <Router>
        <div className="worksans-regular">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
