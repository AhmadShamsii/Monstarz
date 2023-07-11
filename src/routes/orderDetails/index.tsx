import {  Card, Table, Typography, Tag, Avatar } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
const Text = Typography;
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";

import Sidebar from "../../components/sidebar";

import { StyledAdminPageHeader, StyledCard } from "../customers/styles";

const OrderDetails = () => {
  const { totalOrders } = useSelector(productsSelector);
  const { orderId } = useParams();
  const index = Number(orderId) - 1;

  const filteredOrders = totalOrders.filter((item, index, self) => {
    return (
      index ===
      self.findIndex((other) => {
        return item.length !== 0 && other === item;
      })
    );
  });

  const order = filteredOrders[index];

  const data1 = order.map((array) => ({
    order: array,
    date: array.date,
    time: array.time,
    price: `$ ${order.reduce((total, item) => total + item.quantity, 0) * 100}`,
    status: (
      <Tag icon={<CheckCircleOutlined />} color="success">
        Paid
      </Tag>
    ),
    orderId: orderId,
  }));

  const uniqueData = data1.reduce((accumulator, current) => {
    const existingObject = accumulator.find(
      (item) => item.name === current.name
    );
    if (!existingObject) {
      return [...accumulator, current];
    }
    return accumulator;
  }, []);

  const columns1 = [
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

  let set;
  const columns2 = [
    {
      title: "Product",
      width: "20%",

      render: (_, record) => {
        if (record.id > 0 && record.id <= 10) {
          set = 2;
        } else if (record.id > 10 && record.id <= 25) {
          set = 1;
        } else if (record.id > 25 && record.id <= 32) {
          set = 5;
        } else if (record.id > 32 && record.id <= 40) {
          set = 3;
        }
        return (
          <Avatar
            size={64}
            style={{ width: "100px", marginLeft: "30px" }}
            src={`https://robohash.org/${record.id}?set=set${set}`}
          />
        );
      },

      key: "product",
    },
    {
      title: "Name",
      render: (_, record) => `${record.first_name} ${record.last_name}`,
      key: "name",
      width: "20%",
    },
    {
      title: "Category",
      width: "20%",
      render: (_, record) => {
        if (record.id > 0 && record.id <= 10) {
          return <Tag color="red">Monster</Tag>;
        } else if (record.id > 10 && record.id <= 25) {
          return <Tag color="green">Robot</Tag>;
        } else if (record.id > 25 && record.id <= 32) {
          return <Tag color="blue">Avatar</Tag>;
        } else if (record.id > 32 && record.id <= 40) {
          return <Tag color="purple">Robo Head</Tag>;
        }
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "20%",
    },
    {
      title: "Price",
      render: (_, record) => `$${record.quantity * 100}`,
      key: "name",
      width: "20%",
    },
  ];

  return (
    <>
      <Sidebar />
      <StyledAdminPageHeader title={`Order #${orderId}`} />
      <StyledCard title="Order Information">
        <Table pagination={false} columns={columns1} dataSource={uniqueData} />
      </StyledCard>
      <>
        <StyledCard title="Items">
          <Table
            style={{ marginBottom: "50px" }}
            pagination={false}
            columns={columns2}
            dataSource={order}
          />
          <Card
            extra={
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  paddingRight: "135px",
                }}
              >
                Total: $
                {order.reduce((total, item) => total + item.quantity, 0) * 100}
              </Text>
            }
            style={{
              backgroundColor: "#FAFAFA",
            }}
          />
        </StyledCard>
      </>
    </>
  );
};
export default OrderDetails;
