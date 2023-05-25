import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { BasketProvider } from "./components/BasketContext";
function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Router>
        <BasketProvider>
          <div className="worksans-regular">
            <Navbar />  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Registration />} />
            </Routes>
          </div>
        </BasketProvider>
      </Router>
    </>
  );
}

export default App;
