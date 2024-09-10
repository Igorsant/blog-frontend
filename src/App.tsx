import { Route, Routes } from "react-router-dom";
import Sigin from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import { CssBaseline, GlobalStyles } from "@mui/material";
import ProtectRoute from "./components/protectRoute";

const globalStyles = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "Roboto, sans-serif",
  },
};

export default function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectRoute>
              <Sigin />
            </ProtectRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectRoute>
              <Signup />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  );
}
