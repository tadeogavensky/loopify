import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="worksans-regular">
          <Navbar />
          <Main />
        </div>
      </Router>
    </>
  );
}

export default App;
