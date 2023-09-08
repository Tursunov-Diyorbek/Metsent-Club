import React from "react";
import { Button, Checkbox, Input, Typography, label, Form } from "antd";
import { useNavigate } from "react-router-dom";
export const LoginPage = ({ setUserActivited }) => {
  const { Text, Space, Title } = Typography;
  const navigate = useNavigate();

  const onFinishLogin = (values) => {
    console.log(values);
    if (values.login === "Diko" && values.password === "2526") {
      setUserActivited(true);
      navigate("/kirildi");
    }
  };

  return (
    <div
      className={""}
      style={{
        width: "400px",
        height: "100vh",
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
        <Title>Kirish</Title>
        <div className={"mb-5"}>
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishLogin}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <label>
              <Typography className={"font-bold"}>Login kiriting</Typography>
              <Form.Item
                name="login"
                rules={[
                  {
                    required: true,
                    message: "Senda login degan narsa yo'qmi 🤨!",
                  },
                ]}
              >
                <Input placeholder="Diko" size="large" />
              </Form.Item>
            </label>
            <label>
              <Typography className={"font-bold"}>Parol kiriting</Typography>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Parol kirit dedim senga 😡!",
                  },
                ]}
              >
                <Input placeholder="2526" size="large" />
              </Form.Item>
            </label>
            <Checkbox className={"p-4 font-medium border-2 rounded mb-4"}>
              I’m not a robot
            </Checkbox>
            <Button
              size="large"
              className={"bg-blue-700 text-white"}
              style={{ width: "100%" }}
              htmlType="submit"
            >
              Kirish
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
