import { Container } from "../Container/container";
import { GoArrowLeft } from "react-icons/go";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { StudentsType, StudentsOTM } from "../SponsorsData/studentsSmallData";
import { ContextData } from "../Context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

export const StudentAdd = () => {
  const { studentData, setStudentData } = useContext(ContextData);
  const [studentType, setStudentType] = useState([...StudentsType]);
  const [studentOTM, setStudentOTM] = useState([...StudentsOTM]);
  const [showConfetti2, setShowConfetti2] = useState(false);
  const navigate = useNavigate();

  const studentDataID = studentData.reduce(
    (studentDataID, studentDataOrder) => {
      return Math.max(studentDataID, studentDataOrder.id);
    },
    -1,
  );
  const notify3 = () => {
    toast.success("Talaba qo'shildi 🥳", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onFinishAddStudent = (values) => {
    setStudentData((prev) => [
      {
        id: studentDataID + 1,
        name: values.name,
        typeStudent: values.type,
        placeStudy: values.otm,
        separatedPrice: 0,
        contractAmount: values.contractPrice,
        number: values.number,
        studentSponsors: [],
      },
      ...prev,
    ]);
    setShowConfetti2(true);
    setTimeout(() => {
      setShowConfetti2(false);
    }, 6000);
    notify3();
  };

  return (
    <>
      {showConfetti2 && <Confetti />}
      <ToastContainer />
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
            <Form onFinish={onFinishAddStudent}>
              <div>
                <div className={"flex items-center justify-between"}>
                  <label className={"w-[46%]"}>
                    <Typography className={"font-bold"}>
                      F.I.Sh. (Familiya Ism Sharif)
                    </Typography>
                    <Form.Item
                      name="name"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Familiya ismini kiritmaysanmi 🤔?",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </label>
                  <label className={"w-[46%]"}>
                    <Typography className={"font-bold"}>
                      Telefon raqam
                    </Typography>
                    <Form.Item
                      name="number"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Telefon raqamini kiritmaysanmi 🤔?",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </label>
                </div>
                <label>
                  <Typography className={"font-bold"}>OTM</Typography>
                  <Form.Item
                    name="otm"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "OTM kiritmaysanmi 🤔?",
                      },
                    ]}
                  >
                    <Select
                      allowClear
                      mode="multiple"
                      options={studentOTM.map((item) => ({
                        label: item.name,
                        value: item.name,
                      }))}
                    />
                  </Form.Item>
                </label>
                <div className={"flex items-center justify-between mt-5"}>
                  <label className={"w-[46%]"}>
                    <Typography className={"font-bold"}>
                      Talabalik turi
                    </Typography>
                    <Form.Item
                      name="type"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Turini kiritmaysanmi 🤔?",
                        },
                      ]}
                    >
                      <Select
                        allowClear
                        mode="multiple"
                        options={studentType.map((item) => ({
                          label: item.type,
                          value: item.type,
                        }))}
                      />
                    </Form.Item>
                  </label>
                  <label className={"w-[46%]"}>
                    <Typography className={"font-bold"}>
                      Kontrakt summa
                    </Typography>
                    <Form.Item
                      name="contractPrice"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Kontrakt pulini kiritmaysanmi 🤔?",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
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
                  htmlType="submit"
                >
                  + Qo‘shish
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
