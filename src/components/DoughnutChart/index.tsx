import { Card, Typography, Empty } from "antd";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";

const Text = Typography;
Chart.register(CategoryScale);
const DoughnutChart = () => {
  const { totalOrders } = useSelector(productsSelector);

  const filteredArray = totalOrders.filter((item, index, self) => {
    return (
      index ===
      self.findIndex((other) => {
        return item.length !== 0 && other === item;
      })
    );
  });

  const allOrders = filteredArray.flatMap((order) => order);

  const monsters = allOrders.filter((item) => item.id > 0 && item.id < 10);
  const robots = allOrders.filter((item) => item.id > 10 && item.id < 25);
  const avatars = allOrders.filter((item) => item.id > 25 && item.id < 32);
  const roboheads = allOrders.filter((item) => item.id > 32 && item.id < 40);

  const totalMonsters = monsters
    .map((mon) => mon.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalRobots = robots
    .map((rob) => rob.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalAvatars = avatars
    .map((ava) => ava.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalRoboheads = roboheads
    .map((robhead) => robhead.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div>
      <Card
        style={{
          marginLeft: "84%",
          width: "350px",
          height: "500px",
          marginTop: "50px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
          }}
        >
          <Text style={{ fontSize: "15.5px", fontWeight: "bold" }}>
            Sales by Categories
          </Text>
          <Text
            style={{
              position: "relative",
              left: "120px",
              top: "-8px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          ></Text>
        </div>

        {filteredArray.length > 0 ? (
          <Doughnut
            style={{ marginTop: "50px" }}
            data={{
              labels: ["Monsters", "Robots", "Avatars", "Roboheads"],
              datasets: [
                {
                  label: "",
                  data: [
                    totalMonsters,
                    totalRobots,
                    totalAvatars,
                    totalRoboheads,
                  ],
                  borderWidth: 1,
                  backgroundColor: ["#3a86ff", "#023e8a", "#0077b6", "#90e0ef"],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
            height={400}
            width={600}
          />
        ) : (
          <Empty
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </Card>
    </div>
  );
};
export default DoughnutChart;
