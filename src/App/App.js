import React, { useEffect } from "react";
import "./App.css";
import "../Style/style.css";
import { SponsorApplication } from "../Companents/SponsorApplication/sponsorApplication";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { LoginPage } from "../Companents/Access/access";
import { Sponsors } from "../Companents/Sponsors/sponsors";
import { useLocalStorageState } from "ahooks";

function App() {
  const [userActivited, setUserActivited] = useLocalStorageState(
    "userActivited",
    { defaultValue: false },
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userActivited && location.pathname === "/login") navigate("/");
    else if (!userActivited) navigate("/");
  }, [userActivited]);

  return (
    <Routes>
      <Route path={"/"} element={<SponsorApplication />}></Route>
      <Route
        path={"/login"}
        element={<LoginPage setUserActivited={setUserActivited} />}
      ></Route>
      <Route path={"/kirildi"} element={<Sponsors />}></Route>
    </Routes>
  );
}
export default App;
