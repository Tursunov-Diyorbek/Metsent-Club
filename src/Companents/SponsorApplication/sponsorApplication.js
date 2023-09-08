import React, { useContext, useState } from "react";
import { Button, Typography, Input, message, Form, Row, Col } from "antd";
import { PiArrowSquareRightFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Context/context";

export const SponsorApplication = () => {
  const { sponsorData, setSponsorData, studentData, setStudentData } =
    useContext(ContextData);
  const [isActive, setIsActive] = useState("Jismoniy shaxs");
  const [sendSum, setSendSum] = useState(1000000);
  const [another, setAnother] = useState(false);
  const navigate = useNavigate();

  const sponsorDataID = sponsorData.reduce((sponsorID, sponsorOrder) => {
    return Math.max(sponsorID, sponsorOrder.id);
  }, -1);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Muvaffaqiyatli qo'shildi 🥳",
    });
  };

  const onFinish = (values) => {
    setSponsorData((prev) => [
      {
        id: sponsorDataID + 1,
        name: values.username,
        number: values.number,
        sponsorsPrice: Number(values.price) || sendSum,
        spentPrice: 0,
        person: isActive,
        data: new Date(),
        organizationName: values.nameOrganization,
        status: "Yangi",
      },
      ...prev,
    ]);
    setIsActive("Jismoniy shaxs");
    setSendSum(1000000);
    success();
  };

  return (
    <>
      {contextHolder}
      <div
        style={{
          boxShadow: "1px 7px 12px -11px rgba(0, 0, 0, 0.2)",
          padding: "20px 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={"flex items-center gap-3"}>
          <img src={require("../../Imgs/Group (5).png")} alt="logo" />
          <div
            className={"py-1 px-2"}
            style={{ backgroundColor: "#E94A47", borderRadius: 5 }}
          >
            <Typography
              style={{ fontSize: 10, color: "#fff", fontWeight: "bold" }}
            >
              CLUB
            </Typography>
          </div>
        </div>
        <div>
          <ul className={"flex items-center gap-5"}>
            <li className={"cursor-pointer"}>Asosiy</li>
            <li className={"cursor-pointer"}>Grantlar</li>
            <li className={"cursor-pointer"}>Soliq imtiyozlari</li>
            <li
              className={"flex items-center gap-1 cursor-pointer"}
              onClick={() => navigate("/login")}
            >
              <PiArrowSquareRightFill /> Kirish
            </li>
            <li>
              <Button className={"border-2 border-blue-600 text-blue-600"}>
                Ro‘yxatdan o’tish
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <Row>
        <Col
          xs={{ span: 24, offset: 1 }}
          md={{ span: 16, offset: 4 }}
          xl={{ span: 12, offset: 1 }}
        >
          <div className={"py-5"}>
            <Typography
              className={"font-bold"}
              style={{ fontSize: 40, width: 500 }}
            >
              Homiy sifatida ariza topshirish
            </Typography>
            <div className={"flex items-center mt-5"}>
              <div
                className={
                  "border border-blue-500 py-2 text-center rounded-s cursor-pointer"
                }
                style={{
                  backgroundColor:
                    isActive === "Jismoniy shaxs" ? "#36F" : "#fff",
                  color: isActive === "Jismoniy shaxs" ? "#fff" : "black",
                  width: "50%",
                }}
                onClick={() => setIsActive("Jismoniy shaxs")}
              >
                Jismoniy shaxs
              </div>
              <div
                className={
                  "border border-blue-500 py-2 text-center rounded-e cursor-pointer"
                }
                style={{
                  backgroundColor:
                    isActive === "Yuridik shaxs" ? "#36F" : "#fff",
                  color: isActive === "Yuridik shaxs" ? "#fff" : "black",
                  width: "50%",
                }}
                onClick={() => setIsActive("Yuridik shaxs")}
              >
                Yuridik shaxs
              </div>
            </div>
            <Form onFinish={onFinish}>
              <div className={"mt-5"}>
                <label>
                  <Typography className={"font-bold"}>
                    F.I.Sh. (Familiya Ism Sharifingiz)
                  </Typography>
                  <Form.Item
                    name="username"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Ismingizni kiritmaysizmi 😡!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </label>
                <label>
                  <Typography className={"font-bold"}>
                    Telefon raqamingiz
                  </Typography>
                  <Form.Item
                    name="number"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Telefon raqamingnizni kiritmaysizmi 😡!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </label>
              </div>
              <Typography className={"mt-3 font-bold"}>
                To‘lov summasi
              </Typography>
              <Form.Item>
                <div
                  style={{ width: "100%" }}
                  className={"flex flex-wrap gap-2"}
                >
                  <Button
                    style={{
                      width: "32%",
                      fontWeight: "bold",
                      border: sendSum === 1000000 ? "1px solid blue" : "",
                    }}
                    onClick={() => {
                      setAnother(false);
                      setSendSum(1000000);
                    }}
                  >
                    1 000 000
                    <span
                      style={{
                        fontSize: 10,
                        marginInlineStart: 2,
                        color: "#2E5BFF",
                      }}
                    >
                      UZS
                    </span>
                  </Button>
                  <Button
                    style={{
                      width: "32%",
                      fontWeight: "bold",
                      border: sendSum === 5000000 ? "1px solid blue" : "",
                    }}
                    onClick={() => {
                      setAnother(false);
                      setSendSum(5000000);
                    }}
                  >
                    5 000 000{" "}
                    <span
                      style={{
                        fontSize: 10,
                        marginInlineStart: 2,
                        color: "#2E5BFF",
                      }}
                    >
                      UZS
                    </span>
                  </Button>
                  <Button
                    style={{
                      width: "32%",
                      fontWeight: "bold",
                      border: sendSum === 7000000 ? "1px solid blue" : "",
                    }}
                    onClick={() => {
                      setAnother(false);
                      setSendSum(7000000);
                    }}
                  >
                    7 000 000{" "}
                    <span
                      style={{
                        fontSize: 10,
                        marginInlineStart: 2,
                        color: "#2E5BFF",
                      }}
                    >
                      UZS
                    </span>
                  </Button>
                  <Button
                    style={{
                      width: "32%",
                      fontWeight: "bold",
                      border: sendSum === 10000000 ? "1px solid blue" : "",
                    }}
                    onClick={() => {
                      setAnother(false);
                      setSendSum(10000000);
                    }}
                  >
                    10 000 000{" "}
                    <span
                      style={{
                        fontSize: 10,
                        marginInlineStart: 2,
                        color: "#2E5BFF",
                      }}
                    >
                      UZS
                    </span>
                  </Button>
                  <Button
                    style={{
                      width: "32%",
                      fontWeight: "bold",
                      border: sendSum === 30000000 ? "1px solid blue" : "",
                    }}
                    onClick={() => {
                      setAnother(false);
                      setSendSum(30000000);
                    }}
                  >
                    30 000 000{" "}
                    <span
                      style={{
                        fontSize: 10,
                        marginInlineStart: 2,
                        color: "#2E5BFF",
                      }}
                    >
                      UZS
                    </span>
                  </Button>
                  <Button
                    style={{
                      width: "32%",
                      fontWeight: "bold",
                      border: sendSum === "Boshqa" ? "1px solid blue" : "",
                    }}
                    onClick={() => {
                      setAnother(true);
                      setSendSum("Boshqa");
                    }}
                  >
                    BOSHQA
                  </Button>
                  {another && (
                    <label className={"w-[100%]"}>
                      <Typography className={"font-bold"}>
                        Boshqa sum kiritish
                      </Typography>
                      <Form.Item
                        name="price"
                        rules={[
                          {
                            required: true,
                            message: "Narx kiriting!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </label>
                  )}
                </div>
              </Form.Item>
              {isActive === "Yuridik shaxs" && (
                <label className={"w-[100%]"}>
                  <Typography className={"font-bold"}>
                    Tashkilot nomi
                  </Typography>
                  <Form.Item
                    name="nameOrganization"
                    rules={[
                      {
                        required: true,
                        message: "Tashkilot nomini yozing!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </label>
              )}
              <Button
                style={{
                  backgroundColor: "#2E5BFF",
                  color: "#fff",
                  width: "100%",
                }}
                htmlType="submit"
              >
                Yuborish
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={{ span: 0 }} md={{ span: 0 }} xl={{ span: 11 }}>
          <div
            style={{
              backgroundColor: "#F5F5F7",
            }}
          >
            <div>
              <div style={{ padding: 40 }}>
                <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
                  Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib
                  shakllanadi. Ayni oʻsha paytda ularni oʻzlari oʻrgangan
                  muhitdan ajratib qoʻymaslik kerak.
                </Typography>
                <div className={"flex items-center gap-5 mt-5"}>
                  <img
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 15,
                    }}
                    src="https://president.uz/uploads/0d737f64-7ed9-dae5-b4b4-4e922162cc8b_lists_6457.jpg"
                    alt="rasm"
                  />
                  <div>
                    <Typography style={{ fontWeight: "bold" }}>
                      Shavkat Mirziyoyev
                    </Typography>
                    <Typography>O‘zbekiston Respublikasi Prezidenti</Typography>
                  </div>
                </div>
                <img
                  style={{
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    width: "35%",
                  }}
                  src={require("..//../Imgs/clip-work-searches 1.png")}
                  alt="rasm"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
