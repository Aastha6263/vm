import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Login from "../pages/Login";
import Registration from "../pages/registration";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}
