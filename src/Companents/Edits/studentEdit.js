import React, { useContext, useState } from "react";
import { Container } from "../Container/container";
import { GoArrowLeft } from "react-icons/go";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  message,
  Table,
  Typography,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../Context/context";
import { FiEdit } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { StudentsOTM } from "../SponsorsData/studentsSmallData";
import Confetti from "react-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const StudentEdit = () => {
  const { sponsorData, setSponsorData, studentData, setStudentData } =
    useContext(ContextData);
  const [editOTM, setEditOTM] = useState([...StudentsOTM]);
  const { id } = useParams();
  let studentEdit = studentData.find((item) => item.id === Number(id));
  const newStudentDataIndex = studentData.findIndex(
    (item) => item.id === Number(id),
  );
  const filterStudent = studentData.findIndex((item) => item.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentEditModalOpen, setStudentEditModalOpen] = useState(false);
  const [sponsorEditModalOpen, setSponsorEditModalOpen] = useState(false);
  const [showConfetti3, setShowConfetti3] = useState(false);
  const [studentEditName, setStudentEditName] = useState(studentEdit.name);
  const [studentEditNumber, setStudentEditNumber] = useState(
    studentEdit.number,
  );
  const [studentEditOTM, setStudentEditOTM] = useState(studentEdit.placeStudy);
  const [studentContractAmount, setStudentContractAmount] = useState(
    studentEdit.contractAmount,
  );
  const [editStudentSponsorName, setEditStudentSponsorName] = useState("");
  const [editStudentSponsorPrice, setEditStudentSponsorPrice] = useState();
  const [editSponsorId, setEditSponsorId] = useState();

  const openStudentEditModal = () => {
    setStudentEditModalOpen(true);
  };
  const closeStudentEditModal = () => {
    setStudentEditName(studentEdit.name);
    setStudentEditNumber(studentEdit.number);
    setStudentEditOTM(studentEdit.placeStudy);
    setStudentContractAmount(studentEdit.contractAmount);
    setStudentEditModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const openSponsorEditModal = (id, row) => {
    setSponsorEditModalOpen(true);
    setEditSponsorId(id);
    setEditStudentSponsorName(row.name);
    setEditStudentSponsorPrice(row.price);
  };
  const closeSponsorEditModal = () => {
    setSponsorEditModalOpen(false);
  };

  const navigate = useNavigate();
  const addSponsorId = studentEdit.studentSponsors.reduce(
    (sponsorId, sponsorOrder) => {
      return Math.max(sponsorId, sponsorOrder.id);
    },
    -1,
  );
  const onAddSponsor = (values) => {
    const updatedData = studentData;
    const newSponsor = {
      id: addSponsorId + 1 || 1,
      name: values.sponsorName,
      price: Number(values.sponsorPrice),
    };
    updatedData[filterStudent] = {
      ...updatedData[filterStudent],
      studentSponsors: [
        newSponsor,
        ...updatedData[filterStudent].studentSponsors,
      ],
    };
    setStudentData(updatedData);
    handleCancel();
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "F.i.sh",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <Typography className={"font-bold"}>{name}</Typography>;
      },
    },
    {
      title: "Ajratilingan summa",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return (
          <Typography className={"font-bold"}>
            {Intl.NumberFormat("ru-Ru").format(price)}{" "}
            <span className={"text-[#B2B7C1]"}>UZS</span>
          </Typography>
        );
      },
    },
    {
      title: "Amallar",
      dataIndex: "id",
      key: "id",
      render: (id, row) => {
        return (
          <Button onClick={() => openSponsorEditModal(id, row)}>
            <FiEdit />
          </Button>
        );
      },
    },
  ];

  const EditStudent = () => {
    setStudentData((prevStudentData) =>
      prevStudentData.map((item) => {
        if (item.id === Number(id)) {
          return {
            ...item,
            name: studentEditName,
            number: studentEditNumber,
            placeStudy: studentEditOTM,
            contractAmount: studentContractAmount,
          };
        }
        return item;
      }),
    );
    setStudentEditName(studentEdit.name);
    setStudentEditNumber(studentEdit.number);
    setStudentEditOTM(studentEdit.placeStudy);
    setStudentContractAmount(studentEdit.contractAmount);

    closeStudentEditModal();

    setShowConfetti3(true);

    setTimeout(() => {
      setShowConfetti3(false);
    }, 6000);
  };

  const EditStudentOTM = (value) => {
    setStudentEditOTM(value);
  };
  const notify2 = () => {
    toast.success("Talaba o'zgartirildi 🥳", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const EditStudentSponsorName = (value) => {
    setEditStudentSponsorName(value);
  };

  const StudentSponsorEdit = () => {
    const newStudentSponsor = [...studentData];
    newStudentSponsor[newStudentDataIndex].studentSponsors.filter((item) => {
      if (item.id === editSponsorId) {
        item.name = editStudentSponsorName;
        item.price = editStudentSponsorPrice;
      }
    });
    setStudentData(newStudentSponsor);
    closeSponsorEditModal();
  };

  const DeleteStudentSponsor = () => {
    setStudentData((prev) => {
      const updatedStudentData = prev.map((student, index) => {
        if (index === newStudentDataIndex) {
          return {
            ...student,
            studentSponsors: student.studentSponsors.filter(
              (item) => item.id !== editSponsorId,
            ),
          };
        }
        return student;
      });

      return updatedStudentData;
    });
    closeSponsorEditModal();
  };

  const [messageApi, contextHolder] = message.useMessage();
  const SponsorEditStudent = () => {
    messageApi.open({
      type: "success",
      content: "Homiy muvaffaqiyatli o'zgartirildi",
    });
  };

  return (
    <>
      {showConfetti3 && <Confetti />}
      <ToastContainer />
      {contextHolder}
      <Container className={"pb-3 bg-white"}>
        <div className={"flex items-center gap-3 font-bold"}>
          <GoArrowLeft
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => navigate("/admin/talabalar")}
          />
          <Typography style={{ fontSize: 25 }}>{studentEdit.name}</Typography>
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
                  Talaba haqida
                </Typography>
                <Button
                  className={"flex items-center gap-2"}
                  onClick={openStudentEditModal}
                >
                  <FiEdit /> Tahrirlash
                </Button>
              </div>
              <div className={"flex items-center my-2"}>
                <Typography
                  className={"bg-[#E5EBFF] text-[#3366FF] font-bold p-1"}
                  style={{ fontSize: 10 }}
                >
                  Asosiy ma’lumotlar
                </Typography>
                <div className={"border border-b-1 w-[100%] h-0 flex-1"}></div>
              </div>
              <div>
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
                      {studentEdit.name}
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography className={"text-[#B5B5C3] my-2"}>
                    Telefon raqam
                  </Typography>
                  <Typography className={"font-bold"}>
                    {studentEdit.number}
                  </Typography>
                </div>
                <div className={"flex items-center my-4"}>
                  <Typography
                    className={"bg-[#E5EBFF] text-[#3366FF] font-bold p-1"}
                    style={{ fontSize: 10 }}
                  >
                    O‘qish joyi haqida ma’lumot
                  </Typography>
                  <div
                    className={"border border-b-1 w-[100%] h-0 flex-1"}
                  ></div>
                </div>
                <div>
                  <div className={"flex items-center gap-10"}>
                    <div>
                      <div>
                        <Typography className={"text-[#B5B5C3]"}>
                          OTM
                        </Typography>
                        <Typography className={"font-bold"}>
                          {studentEdit.placeStudy}
                        </Typography>
                      </div>
                      <div>
                        <Typography className={"text-[#B5B5C3] mt-3"}>
                          Ajratilingan summa
                        </Typography>
                        <Typography className={"font-bold"}>
                          {Intl.NumberFormat("ru-Ru").format(
                            studentEdit.separatedPrice,
                          )}{" "}
                          UZS
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Typography className={"text-[#B5B5C3]"}>
                          Talabalik turi
                        </Typography>
                        <Typography className={"font-bold"}>
                          {studentEdit.typeStudent}
                        </Typography>
                      </div>
                      <div>
                        <Typography className={"text-[#B5B5C3] mt-3"}>
                          Kontrakt miqdori
                        </Typography>
                        <Typography className={"font-bold"}>
                          {Intl.NumberFormat("ru-Ru").format(
                            studentEdit.contractAmount,
                          )}{" "}
                          UZS
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={"mt-10"}>
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
                  Talabaga homiylar
                </Typography>
                <Button
                  className={"flex items-center gap-2"}
                  onClick={showModal}
                >
                  + Homiy qo'shish
                </Button>
              </div>
              <div>
                <Table
                  className={"mt-5"}
                  columns={columns}
                  dataSource={studentData[filterStudent].studentSponsors}
                  pagination={{
                    pageSize: 5,
                  }}
                />
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
        title="Homiy qo'shish"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Divider />
        <Form onFinish={onAddSponsor}>
          <label>
            <Typography className={"font-bold"}>
              F.I.Sh. (Familiya Ism Sharifingiz)
            </Typography>
            <Form.Item
              name="sponsorName"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Homiy ismini kiriting 😎!",
                },
              ]}
            >
              <Select
                mode="multiple"
                options={sponsorData.map((item) => ({
                  label: item.name,
                  value: item.name,
                }))}
                allowClear
              />
            </Form.Item>
          </label>
          <label>
            <Typography className={"font-bold mt-5"}>
              Ajratilingan summa
            </Typography>
            <Form.Item
              name="sponsorPrice"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Ajratilgan summani kiriting 💵!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </label>
          <Divider />
          <div className={"flex justify-end"}>
            <Button type="primary bg-[blue]" htmlType="submit">
              + Qo'shish
            </Button>
          </div>
        </Form>
      </Modal>
      <Modal
        title="Tahrirlash"
        open={studentEditModalOpen}
        onCancel={closeStudentEditModal}
        footer={false}
      >
        <Divider />
        <label>
          <Typography className={"font-bold"}>
            F.I.Sh. (Familiya Ism Sharifingiz)
          </Typography>
          <Input
            value={studentEditName}
            onChange={(e) => setStudentEditName(e.target.value)}
          />
        </label>
        <label>
          <Typography className={"font-bold mt-5"}>Telefon raqam</Typography>
          <Input
            value={studentEditNumber}
            onChange={(e) => setStudentEditNumber(e.target.value)}
          />
        </label>
        <label>
          <Typography className={"font-bold mt-5"}>OTM</Typography>
          <Select
            mode="multiple"
            value={studentEditOTM}
            className={"w-[100%]"}
            onChange={EditStudentOTM}
            options={editOTM.map((item) => ({
              label: item.name,
              value: item.name,
            }))}
          />
        </label>
        <label>
          <Typography className={"font-bold mt-5"}>Kontrakt miqdori</Typography>
          <Input
            value={studentContractAmount}
            onChange={(e) => setStudentContractAmount(e.target.value)}
          />
        </label>
        <Divider />
        <div className={"flex justify-end"}>
          <Button
            type={"primary"}
            className={"bg-[blue] flex items-center gap-3"}
            onClick={() => {
              EditStudent();
              notify2();
            }}
          >
            <FaRegSave /> Saqlash
          </Button>
        </div>
      </Modal>
      <Modal
        title="Homiylarni tahrirlash"
        open={sponsorEditModalOpen}
        onCancel={closeSponsorEditModal}
        footer={false}
      >
        <Divider />
        <label>
          <Typography className={"font-bold"}>
            F.I.Sh. (Familiya Ism Sharifingiz)
          </Typography>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            value={editStudentSponsorName}
            onChange={EditStudentSponsorName}
            options={sponsorData.map((item) => ({
              label: item.name,
              value: item.name,
            }))}
          />
        </label>
        <label>
          <Typography className={"font-bold mt-5"}>
            Ajratilingan summa
          </Typography>
          <Input
            value={editStudentSponsorPrice}
            onChange={(e) => setEditStudentSponsorPrice(e.target.value)}
          />
        </label>
        <Divider />
        <div className={"flex justify-end"}>
          <div className={"flex items-center gap-3"}>
            <Button
              color={"error"}
              className={"flex items-center gap-3"}
              danger
              onClick={DeleteStudentSponsor}
            >
              <MdOutlineDeleteOutline /> Homiyni o‘chirish
            </Button>
            <Button
              type={"primary"}
              className={"bg-[blue] flex items-center gap-3"}
              onClick={() => {
                StudentSponsorEdit();
                SponsorEditStudent();
              }}
            >
              <FaRegSave /> Saqlash
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
