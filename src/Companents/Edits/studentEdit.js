import React from "react";
import { Container } from "../Container/container";
import { GoArrowLeft } from "react-icons/go";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

export const StudentEdit = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className={"pb-3 bg-white"}>
        <div className={"flex items-center gap-3 font-bold"}>
          <GoArrowLeft
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => navigate("/admin/talabalar")}
          />
          <Typography style={{ fontSize: 25 }}>Talaba Edit</Typography>
        </div>
      </Container>
    </>
  );
};
