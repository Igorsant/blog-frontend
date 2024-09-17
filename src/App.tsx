import { Route, Routes } from "react-router-dom";
import Sigin from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import { CssBaseline, GlobalStyles } from "@mui/material";
import ProtectRoute from "./components/protectRoute";
import { ResetPassword } from "./pages/resetPassword";
import { ForgotPassword } from "./pages/forgotPassword";
import { ConfirmCode } from "./pages/confirmCode";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import PrivateRoute from "./components/privateRoute";

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
  const cookies = useCookies(["user"])[0];

  useEffect(() => {
    console.log(cookies);
  });
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProtectRoute />}>
          <Route path="/login" element={<Sigin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirm" element={<ConfirmCode />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}
