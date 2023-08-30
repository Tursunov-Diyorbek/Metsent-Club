import React, { useEffect, useState } from "react";
import "./App.css";
import "../Style/style.css";
import { SponsorApplication } from "../Companents/SponsorApplication/sponsorApplication";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { LoginPage } from "../Companents/Access/access";
import { useLocalStorageState } from "ahooks";
import { AdminPanel } from "../Companents/Admin/AdminPanel";
import { Menu } from "../Companents/Menu/menu";
import { ContextData } from "../Companents/Context/context";
import { SponsorsData } from "../Companents/SponsorsData/sponsorsData";
import { StudentsData } from "../Companents/SponsorsData/studentsData";
import { StudentAdd } from "../Companents/StudentAdd/studentAdd";
import { SponsorEdit } from "../Companents/Edits/sponsorEdit";
import { StudentEdit } from "../Companents/Edits/studentEdit";

function App() {
  const [userActivited, setUserActivited] = useLocalStorageState(
    "userActivited",
    { defaultValue: false },
  );
  const [sponsorData, setSponsorData] = useLocalStorageState("SponsorsData", {
    defaultValue: [...SponsorsData],
  });
  const [studentData, setStudentData] = useLocalStorageState("StudentsData", {
    defaultValue: [...StudentsData],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (userActivited === false) navigate("/");
    else if (userActivited === true) navigate("/admin/dashboard");
  }, [userActivited]);

  return (
    <ContextData.Provider
      value={{
        sponsorData,
        setSponsorData,
        studentData,
        setStudentData,
      }}
    >
      <Routes>
        <Route path={"/"} element={<SponsorApplication />}></Route>
        <Route
          path={"/login"}
          element={<LoginPage setUserActivited={setUserActivited} />}
        ></Route>
        <Route
          path={"/admin"}
          element={<AdminPanel setUserActivited={setUserActivited} />}
        >
          <Route path={"/admin/:tab"} element={<Menu />}></Route>

          <Route
            path={"/admin/talabalar/talaba_qoshish"}
            element={<StudentAdd />}
          ></Route>

          <Route
            path={"/admin/homiylar/homiyni_ozgartirish"}
            element={<SponsorEdit />}
          ></Route>

          <Route
            path={"/admin/talabalar/talabani_ozgartirish"}
            element={<StudentEdit />}
          ></Route>
        </Route>
      </Routes>
    </ContextData.Provider>
  );
}
export default App;
