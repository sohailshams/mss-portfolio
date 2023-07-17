import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
