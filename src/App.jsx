import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/home";
import Songs from "./Pages/Songs/Songs";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/songs" exact element={<Songs />} />
          <Route path="/login" exact element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
