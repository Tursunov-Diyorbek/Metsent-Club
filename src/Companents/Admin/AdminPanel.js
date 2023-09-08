import { Container } from "../Container/container";
import { Typography, Image } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

defineElement(lottie.loadAnimation);

export const AdminPanel = ({ setUserActivited }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={"bg-white shadow"}>
        <Container>
          <div className={"py-5 flex items-center justify-between"}>
            <img src={require("..//../Imgs/Group (5).png")} alt="logo" />
            <div className={"flex items-center gap-5"}>
              <div
                className={"flex items-center bg-[#E8E8E8] p-2 gap-2"}
                style={{ borderRadius: 5 }}
              >
                <Typography className={"font-bold"}>D I K O</Typography>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEIfmUuRGl9ciMp5yNgPtz7HV2OQE4uBRfw&usqp=CAU"
                  alt="rasm"
                  className={"object-cover"}
                  style={{ borderRadius: 5 }}
                  width={30}
                  height={30}
                />
              </div>
              <lord-icon
                src="https://cdn.lordicon.com/twopqjaj.json"
                trigger="boomerang"
                colors="primary:#121331,secondary:#ebe6ef,tertiary:#f9c9c0,quaternary:#f24c00,quinary:#3a3347,senary:#b26836,septenary:#2ca58d"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                  setUserActivited(false);
                }}
              ></lord-icon>
            </div>
          </div>
        </Container>
      </div>
      <Outlet />
    </>
  );
};
