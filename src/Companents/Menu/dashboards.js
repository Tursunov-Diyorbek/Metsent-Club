import { Typography, Tooltip } from "antd";
import { Container } from "../Container/container";
import { FaMoneyBillWave } from "react-icons/fa";
import { Legend } from "chart.js";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { SecondMenu } from "../SecondMenu/secondMenu";

export const Dashboards = () => {
  const data = [
    {
      name: "Yanvar",
      countSponsors: 2000,
      countStudents: 4000,
    },
    {
      name: "Fevral",
      countSponsors: 3000,
      countStudents: 2000,
    },
    {
      name: "Mart",
      countSponsors: 1000,
      countStudents: 2000,
    },
    {
      name: "Aprel",
      countSponsors: 5000,
      countStudents: 3000,
    },
    {
      name: "May",
      countSponsors: 3500,
      countStudents: 2100,
    },
    {
      name: "Iyun",
      countSponsors: 3450,
      countStudents: 1150,
    },
    {
      name: "Iyul",
      countSponsors: 2000,
      countStudents: 4400,
    },
    {
      name: "Avgust",
      countSponsors: 1000,
      countStudents: 3000,
    },
    {
      name: "Sentabr",
      countSponsors: 3200,
      countStudents: 5800,
    },
    {
      name: "Oktabr",
      countSponsors: 1000,
      countStudents: 3000,
    },
    {
      name: "Noyabr",
      countSponsors: 1400,
      countStudents: 3100,
    },
    {
      name: "Dekabr",
      countSponsors: 2700,
      countStudents: 5000,
    },
  ];
  return (
    <>
      <SecondMenu tab={"dashboard"} />
      <Container className={"py-10"}>
        <div className={"bg-[#F5F5F7]"}>
          <div className={"flex items-center justify-between"}>
            <div
              className={"w-[32%] bg-white p-3 flex items-center gap-3"}
              style={{ borderRadius: 5 }}
            >
              <div className={"p-2 bg-[#4C6FFF1A]"} style={{ borderRadius: 5 }}>
                <FaMoneyBillWave style={{ color: "#4C6FFF", fontSize: 20 }} />
              </div>
              <div>
                <span style={{ fontSize: 10, color: "#7A7A9D" }}>
                  Jami to‘langan summa
                </span>
                <Typography className={"font-bold"}>
                  1 684 325 000 <span className={"text-[#7A7A9D]"}>UZS</span>
                </Typography>
              </div>
            </div>
            <div
              className={"w-[32%] bg-white p-3 flex items-center gap-3"}
              style={{ borderRadius: 5 }}
            >
              <div className={"p-2 bg-[#EDC7001A]"} style={{ borderRadius: 5 }}>
                <FaMoneyBillWave style={{ color: "#EDC700", fontSize: 20 }} />
              </div>
              <div>
                <span style={{ fontSize: 10, color: "#7A7A9D" }}>
                  Jami so‘ralgan summa
                </span>
                <Typography className={"font-bold"}>
                  1 684 325 000 <span className={"text-[#7A7A9D]"}>UZS</span>
                </Typography>
              </div>
            </div>
            <div
              className={"w-[32%] bg-white p-3 flex items-center gap-3"}
              style={{ borderRadius: 5 }}
            >
              <div className={"p-2 bg-[#ED72001A]"} style={{ borderRadius: 5 }}>
                <FaMoneyBillWave style={{ color: "#ED7200", fontSize: 20 }} />
              </div>
              <div>
                <span style={{ fontSize: 10, color: "#7A7A9D" }}>
                  To‘lanishi kerak summa
                </span>
                <Typography className={"font-bold"}>
                  1 684 325 000 <span className={"text-[#7A7A9D]"}>UZS</span>
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <LineChart
              width={1200}
              height={400}
              data={data}
              className="mx-auto  mt-5"
            >
              <Line
                type="monotone"
                dataKey="countSponsors"
                stroke="#4C6FFF"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="countStudents"
                stroke="#FF92AE"
                strokeWidth={3}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </div>
        </div>
      </Container>
    </>
  );
};
