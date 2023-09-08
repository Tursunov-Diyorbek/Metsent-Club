import { Container } from "../Container/container";
import { Table, Tag } from "antd";
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { ContextData } from "../Context/context";
import { useNavigate } from "react-router-dom";
import { SecondMenu } from "../SecondMenu/secondMenu";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

export const Sponsors = () => {
  const {
    sponsorData,
    setSponsorData,
    studentData,
    setStudentData,
    nameSearch,
    setNameSearch,
  } = useContext(ContextData);

  const navigate = useNavigate();

  const columnsSponsors = [
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
      title: "Tel.Raqami",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Homiylik summasi",
      dataIndex: "sponsorsPrice",
      key: "sponsorsPrice",
      render: (text) => (
        <div>
          {new Intl.NumberFormat("en-En").format(text)}
          <span className={"ms-1 font-bold text-[#B2B7C1]"}>UZS</span>
        </div>
      ),
    },
    {
      title: "Sarflangan summa",
      dataIndex: "spentPrice",
      key: "spentPrice",
      render: (text) => (
        <div>
          {new Intl.NumberFormat("en-En").format(text)}
          <span className={"ms-1 font-bold text-[#B2B7C1]"}>UZS</span>
        </div>
      ),
    },
    {
      title: "Sana",
      dataIndex: "data",
      key: "data",
      render: (value, row) => dayjs(row.date).format("DD.MM.YYYY"),
    },
    {
      title: "Holati",
      dataIndex: "status",
      key: "status",
      render: (value, row) => (
        <Tag
          color={
            value === "Yangi"
              ? "blue"
              : "" || value == "Moderatsiyada"
              ? "orange"
              : "" || value == "Tasdiqlangan"
              ? "green"
              : ""
          }
        >
          {value}
        </Tag>
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
          onClick={() => navigate(`/admin/homiylar/${value}`)}
        ></lord-icon>
      ),
    },
  ];

  return (
    <>
      <SecondMenu tab={"homiylar"} />
      <Container className={"bg-[#F5F5F7] py-10"}>
        <Table
          dataSource={sponsorData}
          columns={columnsSponsors}
          pagination={{
            pageSize: 5,
          }}
          className={"overflow-auto"}
        />
      </Container>
    </>
  );
};
