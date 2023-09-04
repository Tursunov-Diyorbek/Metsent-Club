import React, { useContext } from "react";
import { Container } from "../Container/container";
import { GoArrowLeft } from "react-icons/go";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Context/context";

export const StudentEdit = () => {
  // const { editStudent, setEditStudent } = useContext(ContextData);
  const navigate = useNavigate();

  return (
    <Container className={"pb-3 bg-white"}>
      <div className={"flex items-center gap-3 font-bold"}>
        <GoArrowLeft
          style={{ fontSize: 25, cursor: "pointer" }}
          onClick={() => navigate("/admin/talabalar")}
        />
        <Typography style={{ fontSize: 25 }}>Talaba o'zgartirish</Typography>
      </div>
    </Container>
  );
};
