import { Card, Typography, Empty } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";

const Text = Typography;
Chart.register(CategoryScale);
const BarChart = () => {
  const { totalOrders } = useSelector(productsSelector);

  const filteredOrders = totalOrders.filter((item, index, self) => {
    return (
      index ===
      self.findIndex((other) => {
        return item.length !== 0 && other === item;
      })
    );
  });

  const itemsArray = filteredOrders.map((nestedArray) => {
    const totalQuantity = nestedArray.reduce(
      (sum, obj) => sum + obj.quantity,
      0
    );
    return totalQuantity;
  });

  const priceArray = itemsArray.map((entry) => entry * 100);

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
        </div>
        {filteredOrders.length > 0 ? (
          <Bar
            style={{ marginTop: "50px" }}
            data={{
              labels: Array.from(
                { length: priceArray.length },
                (_, index) => `Order ${index + 1}`
              ),
              datasets: [
                {
                  label: "",
                  data: priceArray,
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
                  title: {
                    display: true,
                    text: "Price",
                  },
                },
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Orders",
                  },
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
export default BarChart;
