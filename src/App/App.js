import React, { useEffect, useState } from "react";
import "./App.css";
import "../Style/style.css";
import { SponsorApplication } from "../Companents/SponsorApplication/sponsorApplication";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../Companents/Access/access";
import { useLocalStorageState } from "ahooks";
import { AdminPanel } from "../Companents/Admin/AdminPanel";
import { ContextData } from "../Companents/Context/context";
import { SponsorsData } from "../Companents/SponsorsData/sponsorsData";
import { StudentsData } from "../Companents/SponsorsData/studentsData";
import { StudentAdd } from "../Companents/StudentAdd/studentAdd";
import { SponsorEdit } from "../Companents/Edits/sponsorEdit";
import { StudentEdit } from "../Companents/Edits/studentEdit";
import { Dashboards } from "../Companents/Menu/dashboards";
import { Sponsors } from "../Companents/Menu/sponsors";
import { Students } from "../Companents/Menu/students";

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
  const [nameSearch, setNameSearch] = useState("");

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
        nameSearch,
        setNameSearch,
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
          <Route path={"/admin/dashboard"} element={<Dashboards />}></Route>
          <Route path={"/admin/homiylar"} element={<Sponsors />}></Route>
          <Route path={"/admin/talabalar"} element={<Students />}></Route>

          <Route
            path={"/admin/talabalar/talaba_qoshish"}
            element={<StudentAdd />}
          ></Route>

          <Route path={"/admin/homiylar/:id"} element={<SponsorEdit />}></Route>

          <Route
            path={"/admin/talabalar/:id"}
            element={<StudentEdit />}
          ></Route>
        </Route>
      </Routes>
    </ContextData.Provider>
  );
}
export default App;
