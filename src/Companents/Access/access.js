import { useState } from "react";
import { Button, Checkbox, Input, Typography, label } from "antd";
import { useNavigate } from "react-router-dom";
export const LoginPage = ({ setUserActivited }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { Text, Space, Title } = Typography;
  const navigate = useNavigate();
  const submit = () => {
    if (login === "Diko" && password === "2526") {
      setUserActivited(true);
      navigate("/kirildi");
    }
  };

  return (
    <div
      className={""}
      style={{
        width: "400px",
        height: "80vh",
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className={"flex items-center text-center justify-center gap-3 mb-10  "}
      >
        <img
          className={""}
          src={require("..//../Imgs/Group (5).png")}
          alt="logo"
        />
        <Text
          className={
            "bg-red-600 text-amber-50 font-medium mt-1 px-2 py-0.5 rounded"
          }
        >
          CLUB
        </Text>
      </div>

      <div className={"bg-white p-5 rounded-2xl"}>
        <Title className={"pb-5"}>Kirish</Title>
        <div className={"mb-5"}>
          <label className={"mb-4"}>
            <span className={"font-bold"}>Login</span>
            <Input
              value={login}
              placeholder="Diko"
              onChange={(e) => setLogin(e.target.value)}
              size="large"
            />
          </label>
        </div>
        <div className={""}>
          <label className={"mb-4"}>
            <span className={"font-bold"}>Parol</span>
            <Input.Password
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="2526"
              size="large"
            />
          </label>
        </div>

        <div className={"border-2 rounded my-4"}>
          <Checkbox className={"p-4 font-medium"}>I’m not a robot</Checkbox>
          <Text className={""}></Text>
        </div>
        <Button
          size="large"
          onClick={submit}
          className={"bg-blue-700 text-white"}
          style={{ width: "100%" }}
        >
          Kirish
        </Button>
      </div>
    </div>
  );
};
