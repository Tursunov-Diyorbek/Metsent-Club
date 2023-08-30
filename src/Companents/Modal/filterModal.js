import { Divider, Modal, Select, Typography, DatePicker } from "antd";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ContextData } from "../Context/context";
import { StudentsOTM, StudentsType } from "../SponsorsData/studentsSmallData";
import { sponsorsStatusData } from "../SponsorsData/sponsorsSmallData";
import { useForm } from "antd/es/form/Form";

const Modals = styled(Modal)`
  .ant-btn-primary {
    background-color: blue;
  }
`;

export const FilterModal = ({
  setFilterModalOpen,
  handleCancel,
  filterModalOpen,
}) => {
  const { sponsorData, setSponsorData, studentData, setStudentData } =
    useContext(ContextData);
  const [studentType, setStudentType] = useState([...StudentsType]);
  const [studentOTM, setStudentOTM] = useState([...StudentsOTM]);
  const [sponsorStatus, setSponsorStatus] = useState([...sponsorsStatusData]);
  const [sponsorStatusData, setSponsorStatusData] = useState("");
  // const [sponsorDateFilter, setSponsorDateFilter] = useState(null);
  const [filterSum, setFilterSum] = useState("Barchasi");
  const [typeStudents, setTypeStudents] = useState("");
  const [placeStudys, setPlaceStudys] = useState("");
  const { tab } = useParams();

  const handleOk = () => {
    if (tab === "homiylar") {
      setSponsorData(
        sponsorData.filter(
          (item) =>
            item.status === sponsorStatusData &&
            item.sponsorsPrice === filterSum,
        ),
      );
      setFilterSum("Barchasi");
      setSponsorStatusData("");
    } else if (tab === "talabalar") {
      setStudentData(
        studentData.filter(
          (item) =>
            item.placeStudy === placeStudys &&
            item.typeStudent === typeStudents,
        ),
      );
      setTypeStudents("");
      setPlaceStudys("");
    }
    setFilterModalOpen(false);
  };

  const PlaceStudys = (value) => {
    setPlaceStudys(value);
  };

  const TypeStudents = (value) => {
    setTypeStudents(value);
  };

  const SponsorData = (value) => {
    setSponsorStatusData(value);
  };

  return (
    <>
      {tab === "homiylar" && (
        <Modals
          title="Filter"
          open={filterModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Divider />
          <label>
            <Typography className={"font-bold mt-5"}>ARIZA HOLATI</Typography>
            <Select
              value={sponsorStatusData}
              style={{
                width: "100%",
              }}
              onChange={SponsorData}
              options={sponsorStatus.map((item) => ({
                label: item.status,
                value: item.status,
              }))}
            />
          </label>
          <div>
            <Typography className={"font-bold mt-5"}>
              HOMIYLIK SUMMASI
            </Typography>
            <div className={"flex items-center flex-wrap gap-1"}>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  border: "1px solid #E0E7FF",
                  backgroundColor:
                    filterSum === "Barchasi" ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum("Barchasi")}
              >
                Barchasi
              </div>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  border: "1px solid #E0E7FF",
                  backgroundColor: filterSum === 1000000 ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum(1000000)}
              >
                1 000 000 <span className={"text-[#2E5BFF]"}>UZS</span>
              </div>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  border: "1px solid #E0E7FF",
                  backgroundColor: filterSum === 5000000 ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum(5000000)}
              >
                5 000 000 <span className={"text-[#2E5BFF]"}>UZS</span>
              </div>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  border: "1px solid #E0E7FF",
                  backgroundColor: filterSum === 7000000 ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum(7000000)}
              >
                7 000 000 <span className={"text-[#2E5BFF]"}>UZS</span>
              </div>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  fontSize: 13,
                  border: "1px solid #E0E7FF",
                  backgroundColor: filterSum === 10000000 ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum(10000000)}
              >
                10 000 000 <span className={"text-[#2E5BFF]"}>UZS</span>
              </div>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  fontSize: 13,
                  border: "1px solid #E0E7FF",
                  backgroundColor: filterSum === 30000000 ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum(30000000)}
              >
                30 000 000 <span className={"text-[#2E5BFF]"}>UZS</span>
              </div>
              <div
                className={"font-bold p-2 text-center cursor-pointer"}
                style={{
                  borderRadius: 5,
                  width: "24.3%",
                  fontSize: 13,
                  border: "1px solid #E0E7FF",
                  backgroundColor: filterSum === 50000000 ? "#E0E7FF" : "#fff",
                }}
                onClick={() => setFilterSum(50000000)}
              >
                50 000 000 <span className={"text-[#2E5BFF]"}>UZS</span>
              </div>
            </div>
          </div>
          <Typography className={"font-bold mt-5"}>SANA</Typography>
          <DatePicker />
          <Divider />
        </Modals>
      )}
      {tab === "talabalar" && (
        <Modals
          title="Filter"
          open={filterModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Divider />
          <label>
            <Typography className={"font-bold"}>TALABALIK TURI</Typography>
            <Select
              value={typeStudents}
              style={{
                width: "100%",
              }}
              name="1"
              onChange={TypeStudents}
              options={studentType.map((item) => ({
                label: item.type,
                value: item.type,
              }))}
            />
          </label>
          <label>
            <Typography className={"font-bold mt-5"}>OTM</Typography>
            <Select
              value={placeStudys}
              style={{
                width: "100%",
              }}
              name="2"
              onChange={PlaceStudys}
              options={studentOTM.map((item) => ({
                label: item.name,
                value: item.name,
              }))}
            />
          </label>
          <Divider />
        </Modals>
      )}
    </>
  );
};
