import { Route, Routes } from "react-router-dom";
import Sigin from "./pages/signin";
import Home from "./pages/home";
import Signup from "./pages/signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Sigin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
