import { Container } from "../Container/container";
import { GoArrowLeft } from "react-icons/go";
import {
  Button,
  Col,
  Divider,
  Input,
  message,
  Row,
  Select,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { StudentsType, StudentsOTM } from "../SponsorsData/studentsSmallData";
import { ContextData } from "../Context/context";

export const StudentAdd = () => {
  const { sponsorData, setSponsorData, studentData, setStudentData } =
    useContext(ContextData);
  const [studentType, setStudentType] = useState([...StudentsType]);
  const [studentOTM, setStudentOTM] = useState([...StudentsOTM]);
  const [studentTypeAdd, setStudentTypeAdd] = useState("");
  const [studentOTMAdd, setStudentOTMAdd] = useState("");
  const [studentNameAdd, setStudentNameAdd] = useState("");
  const [studentNumberAdd, setStudentNumberAdd] = useState("+998");
  const [studentPriceAdd, setStudentPriceAdd] = useState("");
  const navigate = useNavigate();

  const studentDataID = studentData.reduce(
    (studentDataID, studentDataOrder) => {
      return Math.max(studentDataID, studentDataOrder.id);
    },
    -1,
  );

  const AddStudent = () => {
    setStudentData((prev) => [
      ...prev,
      {
        id: studentDataID + 1,
        name: studentNameAdd,
        typeStudent: studentTypeAdd,
        placeStudy: studentOTMAdd,
        separatedPrice: 0,
        contractAmount: studentPriceAdd,
        studentNumber: studentNumberAdd,
      },
    ]);
    setStudentNameAdd("");
    setStudentNumberAdd("+998");
    setStudentOTMAdd("");
    setStudentTypeAdd("");
    setStudentPriceAdd("");
  };
  const [messageApi, contextHolder] = message.useMessage();

  const success2 = () => {
    messageApi.open({
      type: "success",
      content: "Talaba qo'shildi",
    });
  };

  const AddStudentType = (value) => {
    setStudentTypeAdd(value);
  };
  const AddStudentOTM = (value) => {
    setStudentOTMAdd(value);
  };

  return (
    <>
      {contextHolder}
      <Container className={"pb-3 bg-white"}>
        <div className={"flex items-center gap-3 font-bold"}>
          <GoArrowLeft
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => navigate("/admin/talabalar")}
          />
          <Typography style={{ fontSize: 25 }}>Talaba qo‘shish</Typography>
        </div>
      </Container>
      <Row>
        <Col
          xs={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          xl={{ span: 12, offset: 6 }}
        >
          <div className={"py-5 px-3 bg-white shadow mt-10 rounded"}>
            <div>
              <div className={"flex items-center justify-between"}>
                <label className={"w-[46%]"}>
                  <Typography className={"font-bold"}>
                    F.I.Sh. (Familiya Ism Sharif)
                  </Typography>
                  <Input
                    value={studentNameAdd}
                    onChange={(e) => setStudentNameAdd(e.target.value)}
                  />
                </label>
                <label className={"w-[46%]"}>
                  <Typography className={"font-bold"}>Telefon raqam</Typography>
                  <Input
                    value={studentNumberAdd}
                    onChange={(e) => setStudentNumberAdd(e.target.value)}
                  />
                </label>
              </div>
              <label>
                <Typography className={"font-bold mt-5"}>OTM</Typography>
                <Select
                  style={{
                    width: "100%",
                  }}
                  onChange={AddStudentOTM}
                  value={studentOTMAdd}
                  options={studentOTM.map((item) => ({
                    label: item.name,
                    value: item.name,
                  }))}
                />
              </label>
              <div className={"flex items-center justify-between mt-5"}>
                <label className={"w-[46%]"}>
                  <Typography className={"font-bold"}>
                    Talabalik turi
                  </Typography>
                  <Select
                    style={{
                      width: "100%",
                    }}
                    value={studentTypeAdd}
                    onChange={AddStudentType}
                    options={studentType.map((item) => ({
                      label: item.type,
                      value: item.type,
                    }))}
                  />
                </label>
                <label className={"w-[46%]"}>
                  <Typography className={"font-bold"}>
                    Kontrakt summa
                  </Typography>
                  <Input
                    value={studentPriceAdd}
                    onChange={(e) => setStudentPriceAdd(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <Divider />
            <div className={"flex justify-end"}>
              <Button
                style={{
                  backgroundColor: "#2E5BFF",
                  color: "#fff",
                }}
                onClick={() => {
                  success2();
                  AddStudent();
                }}
              >
                + Qo‘shish
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
