import React, { useContext, useState } from "react";
import { Button, Typography, Input, message } from "antd";
import { PiArrowSquareRightFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Context/context";

export const SponsorApplication = () => {
  const { sponsorData, setSponsorData, studentData, setStudentData } =
    useContext(ContextData);
  const [isActive, setIsActive] = useState("Jismoniy shaxs");
  const [sendName, setSendName] = useState("");
  const [sendNumber, setSendNumber] = useState("+998");
  const [sendSum, setSendSum] = useState(1000000);
  const [another, setAnother] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const navigate = useNavigate();

  const sponsorDataID = sponsorData.reduce((sponsorID, sponsorOrder) => {
    return Math.max(sponsorID, sponsorOrder.id);
  }, -1);

  const Send = () => {
    setSponsorData((prev) => [
      ...prev,
      {
        id: sponsorDataID + 1,
        name: sendName,
        number: sendNumber,
        sponsorsPrice: sendSum,
        spentPrice: 0,
        person: isActive,
        data: new Date(),
        organizationName,
        status: "Yangi",
      },
    ]);
    setIsActive("Jismoniy shaxs");
    setSendName("");
    setSendNumber("+998");
    setSendSum(1000000);
    setOrganizationName("");
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Muvaffaqiyatli qo'shildi",
    });
  };

  return (
    <>
      {contextHolder}
      <div
        className={"flex justify-between items-center py-5 px-20"}
        style={{
          boxShadow: "1px 7px 12px -11px rgba(0, 0, 0, 0.2)",
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
      <div className={"flex"}>
        <div
          style={{
            height: "calc(100vh - 10vh)",
            width: "70%",
            padding: "50px 80px",
          }}
        >
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
                backgroundColor: isActive === "Yuridik shaxs" ? "#36F" : "#fff",
                color: isActive === "Yuridik shaxs" ? "#fff" : "black",
                width: "50%",
              }}
              onClick={() => setIsActive("Yuridik shaxs")}
            >
              Yuridik shaxs
            </div>
          </div>
          <div className={"mt-5"}>
            <div>
              <label className={"text-bold"}>
                F.I.Sh. (Familiya Ism Sharifingiz)
                <Input
                  value={sendName}
                  onChange={(e) => setSendName(e.target.value)}
                />
              </label>
            </div>
            <div className={"mt-5"}>
              <label className={"text-bold"}>
                Telefon raqamingiz
                <Input
                  value={sendNumber}
                  onChange={(e) => setSendNumber(e.target.value)}
                />
              </label>
            </div>
          </div>
          <Typography className={"mt-3 font-bold"}>To‘lov summasi</Typography>
          <div style={{ width: "100%" }} className={"flex flex-wrap gap-2"}>
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
                style={{ fontSize: 10, marginInlineStart: 2, color: "#2E5BFF" }}
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
                style={{ fontSize: 10, marginInlineStart: 2, color: "#2E5BFF" }}
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
                style={{ fontSize: 10, marginInlineStart: 2, color: "#2E5BFF" }}
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
                style={{ fontSize: 10, marginInlineStart: 2, color: "#2E5BFF" }}
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
                style={{ fontSize: 10, marginInlineStart: 2, color: "#2E5BFF" }}
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
            {another ? (
              <Input onChange={(e) => setSendSum(e.target.value)} />
            ) : (
              ""
            )}
          </div>
          {isActive === "Yuridik shaxs" && (
            <div className={"mt-5"}>
              <label className={"text-bold"}>
                Tashkilot nomi
                <Input
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </label>
            </div>
          )}
          <Button
            style={{
              backgroundColor: "#2E5BFF",
              color: "#fff",
              width: "100%",
              marginTop: 20,
            }}
            onClick={() => {
              success();
              Send();
            }}
          >
            Yuborish
          </Button>
        </div>
        <div
          style={{
            backgroundColor: "#F5F5F7",
            width: "30%",
            height: "calc(100vh - 10vh)",
          }}
        >
          <div>
            <div style={{ padding: 40 }}>
              <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
                Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
                Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
                qoʻymaslik kerak.
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
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                height: "52vh",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={require("..//../Imgs/clip-work-searches 1.png")}
                alt="rasm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
