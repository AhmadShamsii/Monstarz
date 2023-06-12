import { Card, Typography } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
const Text = Typography;
Chart.register(CategoryScale);
const DoughnutChart = () => {
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
            Sales by traffic sources
          </Text>
          <Text
            style={{
              position: "relative",
              left: "120px",
              top: "-8px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <EllipsisOutlined />
          </Text>
        </div>
        <Doughnut
          style={{ marginTop: "50px" }}
          data={{
            labels: ["Facebook", "Youtube", "Twitter", "Instagram"],
            datasets: [
              {
                label: "",
                data: [420, 519, 213, 412],
                borderWidth: 1,
                backgroundColor: ["#3a86ff", "#023e8a", "#0077b6", "#90e0ef"],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          height={400}
          width={600}
        />
      </Card>
    </div>
  );
};
export default DoughnutChart;
