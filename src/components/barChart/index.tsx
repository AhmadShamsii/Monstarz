import { Card, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
const Text = Typography;
Chart.register(CategoryScale);
const BarChart = () => {
  return (
    <div>
      <Card
        style={{
          marginLeft: "35%",
          width: "740px",
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
            Revenue Analytics
          </Text>
          <Text
            style={{
              position: "relative",
              left: "500px",
              fontSize: "13.5px",
              fontWeight: "bold",
            }}
          >
            Yearly <CaretDownOutlined />
          </Text>
        </div>
        <Bar
          style={{ marginTop: "50px" }}
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "",
                data: [
                  420, 519, 413, 615, 712, 813, 719, 924, 621, 816, 1114, 911,
                ],
                borderWidth: 1,
                backgroundColor: "blue",
                borderRadius: 10,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
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
export default BarChart;
