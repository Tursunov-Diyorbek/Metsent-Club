import { Container } from "../Container/container";
import { Radio } from "antd";
import { CiFilter, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextData } from "../Context/context";
import { FilterModal } from "../Modal/filterModal";

export const SecondMenu = ({ tab }) => {
  const {
    sponsorData,
    setSponsorData,
    studentData,
    setStudentData,
    nameSearch,
    setNameSearch,
  } = useContext(ContextData);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const filterModal = () => {
    setFilterModalOpen(true);
  };
  const handleCancel = () => {
    setFilterModalOpen(false);
  };
  const navigate = useNavigate();

  return (
    <>
      <Container className={"pb-3 flex justify-between items-center bg-white"}>
        <Radio.Group>
          <Radio.Button
            value="Dashboard"
            style={{
              backgroundColor: tab === "dashboard" ? "blue" : "",
              color: tab === "dashboard" ? "#fff" : "",
            }}
            onClick={() => {
              navigate("/admin/dashboard");
              setNameSearch("");
            }}
          >
            Dashboard
          </Radio.Button>
          <Radio.Button
            value="Homiylar"
            style={{
              backgroundColor: tab === "homiylar" ? "blue" : "",
              color: tab === "homiylar" ? "#fff" : "",
            }}
            onClick={() => {
              navigate("/admin/homiylar");
              setNameSearch("");
            }}
          >
            Homiylar
          </Radio.Button>
          <Radio.Button
            value="Talabalar"
            style={{
              backgroundColor: tab === "talabalar" ? "blue" : "",
              color: tab === "talabalar" ? "#fff" : "",
            }}
            onClick={() => {
              navigate("/admin/talabalar");
              setNameSearch("");
            }}
          >
            Talabalar
          </Radio.Button>
        </Radio.Group>
        <div className={"flex items-center gap-5"}>
          <div
            className={"bg-[#E8E8E8] px-2 py-1 flex items-center gap-2"}
            style={{ borderRadius: 5 }}
          >
            <CiSearch className={"text-[#B1B1B8]"} />
            <input
              type="search"
              placeholder={"Izlash"}
              value={nameSearch}
              style={{ outline: "none", backgroundColor: "#E8E8E8" }}
              onChange={(e) => setNameSearch(e.target.value)}
            />
          </div>
          <div
            className={
              "px-2 py-1 bg-[#EDF1FD] flex items-center gap-2 text-[#3365FC] cursor-pointer"
            }
            style={{ borderRadius: 5 }}
            onClick={tab === "dashboard" ? null : filterModal}
          >
            <CiFilter /> Filter
          </div>
        </div>
      </Container>
      <FilterModal
        setFilterModalOpen={setFilterModalOpen}
        handleCancel={handleCancel}
        filterModalOpen={filterModalOpen}
        tab={tab}
      />
    </>
  );
};
