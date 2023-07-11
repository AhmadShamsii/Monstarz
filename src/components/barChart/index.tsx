import { Empty } from "antd";

import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { StyledCard, StyledEmpty } from "./styles";

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
    <>
      <StyledCard title="Revenue Analytics">
        {filteredOrders.length > 0 ? (
          <Bar
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
          <StyledEmpty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </StyledCard>
    </>
  );
};
export default BarChart;
