import { Container } from "../Container/container";
import { Button, Table } from "antd";
import { useContext } from "react";
import { ContextData } from "../Context/context";
import { useNavigate } from "react-router-dom";
import { SecondMenu } from "../SecondMenu/secondMenu";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

export const Students = () => {
  const {
    sponsorData,
    setSponsorData,
    studentData,
    setStudentData,
    nameSearch,
    setNameSearch,
  } = useContext(ContextData);

  const navigate = useNavigate();

  const columnsStudents = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "F.I.SH.",
      dataIndex: "name",
      key: "name",
      filteredValue: [nameSearch],
      onFilter: (nameSearch, record) => {
        return record.name.toLowerCase().includes(nameSearch.toLowerCase());
      },
    },
    {
      title: "Talabalik turi",
      dataIndex: "typeStudent",
      key: "typeStudent",
    },
    {
      title: "OTM",
      dataIndex: "placeStudy",
      key: "placeStudy",
    },
    {
      title: "Ajratilingan summa",
      dataIndex: "separatedPrice",
      key: "separatedPrice",
      render: (text) => (
        <div>
          {new Intl.NumberFormat("en-En").format(text)}
          <span className={"ms-1 font-bold text-[#B2B7C1]"}>UZS</span>
        </div>
      ),
    },
    {
      title: "Kontrakt miqdori",
      dataIndex: "contractAmount",
      key: "contractAmount",
      render: (text) => (
        <div>
          {new Intl.NumberFormat("en-En").format(text)}
          <span className={"ms-1 font-bold text-[#B2B7C1]"}>UZS</span>
        </div>
      ),
    },
    {
      title: "Amallar",
      dataIndex: "id",
      key: "id",
      render: (value, row) => (
        <lord-icon
          src="https://cdn.lordicon.com/tyounuzx.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{
            color: "blue",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/admin/talabalar/${value}`)}
        ></lord-icon>
      ),
    },
  ];

  return (
    <>
      <SecondMenu tab={"talabalar"} />
      <Container className={"bg-[#F5F5F7] py-10"}>
        <div className={"text-end"}>
          <Button
            type={"primary"}
            className={"bg-[#36F] text-white"}
            onClick={() => navigate("/admin/talabalar/talaba_qoshish")}
          >
            + Talaba qo'shish
          </Button>
        </div>
        <Table
          dataSource={studentData}
          columns={columnsStudents}
          pagination={{
            pageSize: 5,
          }}
          className={"mt-5 overflow-auto"}
        />
      </Container>
    </>
  );
};
