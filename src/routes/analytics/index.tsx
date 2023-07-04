import {
  PageHeader,
  Card,
  Typography,
  Space,
  Statistic,
  Tag,
  Table,
  Tooltip,
} from "antd";
import {
  EllipsisOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Sidebar from "../../components/sidebar";
import BarChart from "../../components/barChart";
import DoughnutChart from "../../components/doughnutChart";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { Helmet } from "react-helmet-async";

const Title = Typography;
const Text = Typography;
const Analytics = () => {
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

  const orders = filteredArray.map((nestedArray, index) => ({
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

  const data = orders.reverse().slice(0, 3);

  const handleRowClick = (record) => {
    navigate(`orders/${record.orderId}`);
  };

  const salesTotal = orders
    .map((item) => parseInt(item.price.replace("$", "").trim()))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const averageOrderValue = salesTotal / filteredArray.length;

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
      onCell: () => {
        return {
          style: { cursor: "pointer" },
        };
      },
      dataIndex: `orderId`,
      key: "orderId",
      width: "20%",
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
        <title>Admin - Dashboard</title>
      </Helmet>
      <Sidebar />
      <div>
        <PageHeader
          title="Dashboard"
          style={{
            marginTop: "55px",
            marginLeft: "17%",
            fontWeight: "bold",
            backgroundColor: "white",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Card style={{ borderRadius: "10px", width: 350, marginLeft: "17%" }}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Title style={{ fontSize: "15.5px", fontWeight: "bold" }}>
              Sales Total
            </Title>
            <span>
              <EllipsisOutlined />
            </span>
          </Space>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              alignItems: "end",
            }}
          >
            <Title style={{ fontSize: "22px", fontWeight: "bold" }}>
              $ {salesTotal}{" "}
            </Title>
            <span>
              <Statistic
                value={11.28}
                valueStyle={{
                  color: "#3f8600",
                  fontSize: "15px",
                  display: "flex",
                  justifyContent: "end",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Text style={{ fontSize: "12px" }}>Compared to last month</Text>
            </span>
          </Space>
        </Card>

        {/* 
      
      
      
      */}
        <Card style={{ borderRadius: "10px", width: 350 }}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Title style={{ fontSize: "15.5px", fontWeight: "bold" }}>
              Average Order Value
            </Title>
            <span>
              <EllipsisOutlined />
            </span>
          </Space>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              alignItems: "end",
            }}
          >
            <Title style={{ fontSize: "22px", fontWeight: "bold" }}>
              $ {averageOrderValue ? averageOrderValue?.toFixed(2) : 0}
            </Title>
            <span>
              <Statistic
                value={15}
                valueStyle={{
                  color: "#cf1322",
                  fontSize: "15px",
                  display: "flex",
                  justifyContent: "end",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
              <Text style={{ fontSize: "12px" }}>Compared to last month</Text>
            </span>
          </Space>
        </Card>

        {/* 
        
        
        */}
        <Card style={{ borderRadius: "10px", width: 350 }}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Title style={{ fontSize: "15.5px", fontWeight: "bold" }}>
              Total Orders
            </Title>
            <span>
              <EllipsisOutlined />
            </span>
          </Space>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              alignItems: "end",
            }}
          >
            <Title style={{ fontSize: "22px", fontWeight: "bold" }}>
              {filteredArray.length}
            </Title>
            <span>
              <Statistic
                value={44}
                valueStyle={{
                  color: "#3f8600",
                  fontSize: "15px",
                  display: "flex",
                  justifyContent: "end",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Text style={{ fontSize: "12px" }}>Compared to last month</Text>
            </span>
          </Space>
        </Card>
      </div>
      <div style={{ display: "flex" }}>
        <BarChart />
        <DoughnutChart />
      </div>
      <Card
        style={{
          width: "80%",
          marginLeft: "18.5%",
          marginRight: "5%",
          marginTop: "20px",
        }}
      >
        <Text
          style={{
            fontSize: "15.5px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Recent Orders
        </Text>
        <Table
          style={{ paddingBottom: "50px" }}
          columns={columns}
          size="small"
          pagination={false}
          bordered={true}
          dataSource={data}
        ></Table>
      </Card>
    </div>
  );
};

export default Analytics;
