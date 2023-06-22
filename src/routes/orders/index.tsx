import Sidebar from "../../components/sidebar";
import { PageHeader, Card, Table, Tag, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";

const Orders = () => {
  const navigate = useNavigate();
  const { totalOrders } = useSelector(productsSelector);

  const filteredArray = totalOrders.filter((item, index, self) => {
    return (
      index ===
      self.findIndex((other) => {
        return item.length !== 0 && other === item;
      })
    );
  });

  const data = filteredArray.map((nestedArray, index) => ({
    order: nestedArray,
    date: nestedArray[0].date,
    time: nestedArray[0].time,
    price: `$ ${
      nestedArray.reduce((total, item) => total + item.quantity, 0) * 100
    }`,
    status: (
      <Tag icon={<CheckCircleOutlined />} color="success">
        Paid
      </Tag>
    ),
    orderId: `${index + 1}`,
  }));

  const handleRowClick = (record) => {
    navigate(`${record.orderId}`);
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: `orderId`,
      key: "orderId",
      width: "20%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: "20%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "20%",
    },
  ];

  console.log(filteredArray);
  return (
    <div>
      <Sidebar />
      <div>
        <PageHeader
          title="Orders"
          style={{
            marginTop: "55px",
            marginLeft: "17%",
            fontWeight: "bold",
            backgroundColor: "white",
          }}
        />
      </div>
      <Card
        style={{
          width: "80%",
          marginLeft: "18.5%",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <div>
          <Table
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
            style={{ paddingBottom: "50px" }}
            columns={columns}
            size="small"
            pagination={{ position: ["bottomCenter"], pageSize: 8 }}
            bordered={true}
            dataSource={data}
          ></Table>
        </div>
      </Card>
    </div>
  );
};

export default Orders;
