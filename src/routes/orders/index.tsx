import Sidebar from "../../components/sidebar";
import { PageHeader, Card, Table, Tag, Typography, Tooltip } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { Helmet } from "react-helmet-async";
const Text = Typography;

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
      title: (
        <Text>
          Order ID
          <Tooltip title="Click on the order id to see that order details">
            <InfoCircleOutlined style={{ marginLeft: "10px" }} />
          </Tooltip>
        </Text>
      ),
      dataIndex: `orderId`,
      key: "orderId",
      width: "20%",
      onCell: () => {
        return {
          style: { cursor: "pointer" },
        };
      },
      render: (text, record) => (
        <Text style={{ color: "blue" }} onClick={() => handleRowClick(record)}>
          {text}
        </Text>
      ),
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

  return (
    <div>
      <Helmet>
        <title>Admin - Orders</title>
      </Helmet>
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
