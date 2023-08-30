import { Button, Radio, Table, Tag, Typography, Tooltip } from "antd";
import { Container } from "../Container/container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CiSearch, CiFilter } from "react-icons/ci";
import { FaEye, FaMoneyBillWave } from "react-icons/fa";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { FilterModal } from "../Modal/filterModal";
import { ContextData } from "../Context/context";
import { Legend } from "chart.js";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export const Menu = () => {
  const { sponsorData, setSponsorData, studentData, setStudentData } =
    useContext(ContextData);
  const [nameSearch, setNameSearch] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { tab } = useParams();

  const columnsSponsors = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (value, row) => value,
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
      dataIndex: "",
      key: "dsfsd",
      render: (value, row) => (
        <FaEye
          style={{ color: "blue", fontSize: 20, cursor: "pointer" }}
          onClick={() => navigate("/admin/homiylar/homiyni_ozgartirish")}
        />
      ),
    },
  ];

  const columnsStudents = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
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
      dataIndex: "",
      key: "dxggghf",
      render: (value, row) => (
        <FaEye
          style={{ color: "blue", fontSize: 20, cursor: "pointer" }}
          onClick={() => {
            navigate("/admin/talabalar/talabani_ozgartirish");
          }}
        />
      ),
    },
  ];
  const data = [
    {
      name: "Yanvar",
      countSponsors: 2000,
      countStudents: 4000,
    },
    {
      name: "Fevral",
      countSponsors: 3000,
      countStudents: 2000,
    },
    {
      name: "Mart",
      countSponsors: 1000,
      countStudents: 2000,
    },
    {
      name: "Aprel",
      countSponsors: 5000,
      countStudents: 3000,
    },
    {
      name: "May",
      countSponsors: 3500,
      countStudents: 2100,
    },
    {
      name: "Iyun",
      countSponsors: 3450,
      countStudents: 1150,
    },
    {
      name: "Iyul",
      countSponsors: 2000,
      countStudents: 4400,
    },
    {
      name: "Avgust",
      countSponsors: 1000,
      countStudents: 3000,
    },
    {
      name: "Sentabr",
      countSponsors: 3200,
      countStudents: 5800,
    },
    {
      name: "Oktabr",
      countSponsors: 1000,
      countStudents: 3000,
    },
    {
      name: "Noyabr",
      countSponsors: 1400,
      countStudents: 3100,
    },
    {
      name: "Dekabr",
      countSponsors: 2700,
      countStudents: 5000,
    },
  ];

  const filterModal = () => {
    setFilterModalOpen(true);
  };
  const handleCancel = () => {
    setFilterModalOpen(false);
  };

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
      <Container className={"bg-[#F5F5F7] py-10"}>
        {tab === "homiylar" && (
          <Table
            dataSource={sponsorData}
            columns={columnsSponsors}
            pagination={{
              pageSize: 5,
            }}
            className={"overflow-auto"}
          />
        )}
        {tab === "talabalar" && (
          <>
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
              className={"mt-5"}
            />
          </>
        )}
        {tab === "dashboard" && (
          <div className={"bg-[#F5F5F7]"}>
            <div className={"flex items-center justify-between"}>
              <div
                className={"w-[32%] bg-white p-3 flex items-center gap-3"}
                style={{ borderRadius: 5 }}
              >
                <div
                  className={"p-2 bg-[#4C6FFF1A]"}
                  style={{ borderRadius: 5 }}
                >
                  <FaMoneyBillWave style={{ color: "#4C6FFF", fontSize: 20 }} />
                </div>
                <div>
                  <span style={{ fontSize: 10, color: "#7A7A9D" }}>
                    Jami to‘langan summa
                  </span>
                  <Typography className={"font-bold"}>
                    1 684 325 000 <span className={"text-[#7A7A9D]"}>UZS</span>
                  </Typography>
                </div>
              </div>
              <div
                className={"w-[32%] bg-white p-3 flex items-center gap-3"}
                style={{ borderRadius: 5 }}
              >
                <div
                  className={"p-2 bg-[#EDC7001A]"}
                  style={{ borderRadius: 5 }}
                >
                  <FaMoneyBillWave style={{ color: "#EDC700", fontSize: 20 }} />
                </div>
                <div>
                  <span style={{ fontSize: 10, color: "#7A7A9D" }}>
                    Jami so‘ralgan summa
                  </span>
                  <Typography className={"font-bold"}>
                    1 684 325 000 <span className={"text-[#7A7A9D]"}>UZS</span>
                  </Typography>
                </div>
              </div>
              <div
                className={"w-[32%] bg-white p-3 flex items-center gap-3"}
                style={{ borderRadius: 5 }}
              >
                <div
                  className={"p-2 bg-[#ED72001A]"}
                  style={{ borderRadius: 5 }}
                >
                  <FaMoneyBillWave style={{ color: "#ED7200", fontSize: 20 }} />
                </div>
                <div>
                  <span style={{ fontSize: 10, color: "#7A7A9D" }}>
                    To‘lanishi kerak summa
                  </span>
                  <Typography className={"font-bold"}>
                    1 684 325 000 <span className={"text-[#7A7A9D]"}>UZS</span>
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <LineChart
                width={1200}
                height={400}
                data={data}
                className="mx-auto  mt-5"
              >
                <Line
                  type="monotone"
                  dataKey="countSponsors"
                  stroke="#4C6FFF"
                  strokeWidth={3}
                />

                <Line
                  type="monotone"
                  dataKey="countStudents"
                  stroke="#FF92AE"
                  strokeWidth={3}
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </div>
          </div>
        )}
      </Container>
      <FilterModal
        setFilterModalOpen={setFilterModalOpen}
        handleCancel={handleCancel}
        filterModalOpen={filterModalOpen}
      />
    </>
  );
};
