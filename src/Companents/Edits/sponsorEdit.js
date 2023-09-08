import React, { useContext, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import {
  Typography,
  Row,
  Col,
  Button,
  Tag,
  Modal,
  Divider,
  Input,
  Select,
} from "antd";
import { Container } from "../Container/container";
import { useNavigate, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import { ContextData } from "../Context/context";
import { StatusSponsor } from "../SponsorsData/sponsorsData";
import Confetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SponsorPrice = [
  {
    price: 1000000,
  },
  {
    price: 5000000,
  },
  {
    price: 7000000,
  },
  {
    price: 10000000,
  },
  {
    price: 30000000,
  },
];

const SponsorPaymentType = [
  {
    name: "Click",
  },
  {
    name: "Payme",
  },
];

export const SponsorEdit = () => {
  const {
    sponsorData,
    setSponsorData,
    studentData,
    setStudentData,
    nameSearch,
    setNameSearch,
  } = useContext(ContextData);
  const { id } = useParams();
  let sponsorEdit = sponsorData.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  const [sponsorEditModalOpen, setSponsorEditModalOpen] = useState(false);
  const [mode, setMode] = useState(sponsorEdit.person);
  const [sponsorStatusData, setSponsorStatusData] = useState([
    ...StatusSponsor,
  ]);
  const [editSponsorName, setEditSponsorName] = useState(sponsorEdit.name);
  const [editSponsorNumber, setEditSponsorNumber] = useState(
    sponsorEdit.number,
  );
  const [editSponsorStatus, setEditSponsorStatus] = useState(
    sponsorEdit.status,
  );
  const [editSponsorPrice, setEditSponsorPrice] = useState(
    sponsorEdit.sponsorsPrice,
  );
  const [editSponsorPaymentType, setEditSponsorPaymentType] = useState(
    sponsorEdit.PaymentType,
  );
  const [editSponsorOrganizationName, setEditSponsorOrganizationName] =
    useState(sponsorEdit.organizationName);

  const openSponsorEditModal = () => {
    setSponsorEditModalOpen(true);
  };
  const closeSponsorEditModal = () => {
    setEditSponsorName(sponsorEdit.name);
    setEditSponsorNumber(sponsorEdit.number);
    setEditSponsorStatus(sponsorEdit.status);
    setEditSponsorPrice(sponsorEdit.sponsorsPrice);
    setEditSponsorPaymentType(sponsorEdit.PaymentType);
    setEditSponsorOrganizationName(sponsorEdit.organizationName);
    setSponsorEditModalOpen(false);
  };

  const [showConfetti, setShowConfetti] = useState(false);
  const editSponsorSave = () => {
    setSponsorData((prevSponsorData) =>
      prevSponsorData.map((item) => {
        if (item.id === Number(id)) {
          return {
            ...item,
            name: editSponsorName,
            number: editSponsorNumber,
            sponsorsPrice: editSponsorPrice,
            status: editSponsorStatus,
            PaymentType: editSponsorPaymentType,
            organizationName: editSponsorOrganizationName,
          };
        }
        return item;
      }),
    );

    setEditSponsorName(sponsorEdit.name);
    setEditSponsorNumber(sponsorEdit.number);
    setEditSponsorStatus(sponsorEdit.status);
    setEditSponsorPrice(sponsorEdit.sponsorsPrice);
    setEditSponsorPaymentType(sponsorEdit.PaymentType);
    setEditSponsorOrganizationName(sponsorEdit.organizationName);
    closeSponsorEditModal();
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  const EditSponsorStatus = (value) => {
    setEditSponsorStatus(value);
  };
  const EditSponsorPrice = (value) => {
    setEditSponsorPrice(value);
  };
  const EditSponsorPaymentType = (value) => {
    setEditSponsorPaymentType(value);
  };

  const notify = () => {
    toast.success("Homiy o'zgartirildi 🥳", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <ToastContainer />
      <Container className={"pb-3 bg-white"}>
        <div className={"flex items-center gap-3 font-bold"}>
          <GoArrowLeft
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => navigate("/admin/homiylar")}
          />
          <div className={"flex items-center gap-5"}>
            <Typography style={{ fontSize: 25 }}>{sponsorEdit.name}</Typography>
            <Tag
              color={
                sponsorEdit.status === "Yangi"
                  ? "blue"
                  : "" || sponsorEdit.status == "Moderatsiyada"
                  ? "orange"
                  : "" || sponsorEdit.status == "Tasdiqlangan"
                  ? "green"
                  : ""
              }
            >
              {sponsorEdit.status}
            </Tag>
          </div>
        </div>
      </Container>
      <Container className={"py-10 bg-[#f5f5f7] min-h-[400px]"}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div
              className={"py-7 px-3 bg-white shadow"}
              style={{ borderRadius: 10 }}
            >
              <div className={"flex items-center justify-between"}>
                <Typography className={"font-bold"} style={{ fontSize: 20 }}>
                  Homiy haqida
                </Typography>
                <Button
                  className={"flex items-center gap-2"}
                  onClick={openSponsorEditModal}
                >
                  <FiEdit /> Tahrirlash
                </Button>
              </div>
              <div className={"flex items-center gap-2"}>
                <div className={"w-[70px] h-[70px]"}>
                  <img
                    src="https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png"
                    alt="user"
                  />
                </div>
                <div>
                  <Typography
                    style={{ fontWeight: "bold", fontSize: 15, width: 150 }}
                  >
                    {sponsorEdit.name}
                  </Typography>
                </div>
              </div>
              <div className={"flex items-center gap-44"}>
                <div>
                  <Typography className={"text-[#B5B5C3] my-2"}>
                    Telefon raqam
                  </Typography>
                  <Typography className={"font-bold"}>
                    {sponsorEdit.number}
                  </Typography>
                </div>
                <div>
                  <Typography className={"text-[#B5B5C3] my-2"}>
                    Homiylik summasi
                  </Typography>
                  <Typography className={"font-bold"}>
                    {Intl.NumberFormat("ru-Ru").format(
                      sponsorEdit.sponsorsPrice,
                    )}{" "}
                    UZS
                  </Typography>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className={"flex justify-center"}>
          <img
            src={require("..//../Imgs/clip-work-searches 2.png")}
            alt="rasm"
          />
        </div>
      </Container>
      <Modal
        title="Tahrirlash"
        open={sponsorEditModalOpen}
        onCancel={closeSponsorEditModal}
        footer={false}
      >
        <Divider />
        <div>
          <div>
            <div className={"flex mb-5 items-center"}>
              <div
                className={"w-[100%] text-center py-1"}
                style={{
                  backgroundColor: mode === "Jismoniy shaxs" && "blue",
                  color: mode === "Jismoniy shaxs" && "#fff",
                  border: "2px solid #E0E7FF",
                  borderRadius: "5px 0 0 5px",
                }}
              >
                Jismoniy shaxs
              </div>
              <div
                className={"w-[100%] text-center py-1"}
                style={{
                  backgroundColor: mode === "Yuridik shaxs" && "blue",
                  color: mode === "Yuridik shaxs" && "#fff",
                  border: "2px solid #E0E7FF",
                  borderRadius: "0 5px 5px 0",
                }}
              >
                Yuridik shaxs
              </div>
            </div>
          </div>
          <label>
            <Typography className={"font-bold"}>
              F.I.Sh. (Familiya Ism Sharifingiz)
            </Typography>
            <Input
              value={editSponsorName}
              onChange={(e) => setEditSponsorName(e.target.value)}
            />
          </label>
          <label>
            <Typography className={"font-bold mt-5"}>Telefon raqam</Typography>
            <Input
              value={editSponsorNumber}
              onChange={(e) => setEditSponsorNumber(e.target.value)}
            />
          </label>
          <label>
            <Typography className={"font-bold mt-5"}>Holati</Typography>
            <Select
              mode="multiple"
              value={editSponsorStatus}
              className={"w-[100%]"}
              onChange={EditSponsorStatus}
              options={sponsorStatusData.map((item) => ({
                label: item.name,
                value: item.name,
              }))}
            />
          </label>
          <label>
            <Typography className={"font-bold mt-5"}>
              Homiylik summasi
            </Typography>
            <Select
              mode="multiple"
              value={editSponsorPrice}
              className={"w-[100%]"}
              onChange={EditSponsorPrice}
              options={SponsorPrice.map((item) => ({
                label: item.price,
                value: item.price,
              }))}
            />
          </label>
          <label>
            <Typography className={"font-bold mt-5"}>To‘lov turi</Typography>
            <Select
              mode="multiple"
              value={editSponsorPaymentType}
              className={"w-[100%]"}
              onChange={EditSponsorPaymentType}
              options={SponsorPaymentType.map((item) => ({
                label: item.name,
                value: item.name,
              }))}
            />
          </label>
          {mode === "Yuridik shaxs" && (
            <label>
              <Typography className={"font-bold mt-5"}>
                Tashkilot nomi
              </Typography>
              <Input
                value={editSponsorOrganizationName}
                onChange={(e) => setEditSponsorOrganizationName(e.target.value)}
              />
            </label>
          )}
        </div>
        <Divider />
        <div className={"flex justify-end"}>
          <Button
            type={"primary"}
            className={"bg-[blue] flex items-center gap-3"}
            onClick={() => {
              editSponsorSave();
              notify();
            }}
          >
            <FaRegSave /> Saqlash
          </Button>
        </div>
      </Modal>
    </>
  );
};
