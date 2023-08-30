import { Container } from "../Container/container";
import { Typography, Image } from "antd";
import { GiExitDoor } from "react-icons/gi";
import { useNavigate, Outlet } from "react-router-dom";

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
              <GiExitDoor
                style={{ fontSize: 25, cursor: "pointer", color: "#B1B1B8" }}
                onClick={() => {
                  navigate("/");
                  setUserActivited(false);
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <Outlet />
    </>
  );
};
