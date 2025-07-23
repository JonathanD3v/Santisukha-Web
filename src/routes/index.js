import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
// import Register from "../components/Register";
// import Signin from "../components/Signin";
// import ContactForm from "../components/ContactForm";
// import RouteGuard from "./RouteGuard";
import ComingSoon from "../components/ComingSoon";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/signin' element={<Signin />} /> */}
        {/* <Route path='/register' element={<Register />} /> */}
        {/* <Route path='/contact-form' element={<RouteGuard><ContactForm /></RouteGuard>} /> */}
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/events" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/donate" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
