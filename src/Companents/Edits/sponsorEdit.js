import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Typography } from "antd";
import { Container } from "../Container/container";
import { useNavigate } from "react-router-dom";

export const SponsorEdit = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className={"pb-3 bg-white"}>
        <div className={"flex items-center gap-3 font-bold"}>
          <GoArrowLeft
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => navigate("/admin/homiylar")}
          />
          <Typography style={{ fontSize: 25 }}>Homiy o'zgartirish</Typography>
        </div>
      </Container>
    </>
  );
};
