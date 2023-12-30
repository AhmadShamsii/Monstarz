import {
  Typography,
  Space,
  Statistic,
  Tag,
  Table,
  Tooltip,
  Col,
  Row,
  Card,
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
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { Helmet } from "react-helmet-async";
import DoughnutChart from "../../components/DoughnutChart";
import { StyledAdminPageHeader } from "../customers/styles";
const { Link, Text } = Typography;
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
        <Link underline onClick={() => handleRowClick(record)}>
          Order Number: {text}
        </Link>
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
    <>
      <Helmet>
        <title>Admin - Dashboard</title>
      </Helmet>
      <Sidebar />
      <StyledAdminPageHeader title="Dashboard" />
      <Row style={{ margin: "0 20px 0 260px" }} gutter={[24, 24]}>
        <Col span={8}>
          <Card
            style={{ borderRadius: "10px" }}
            title="Sales Total"
            extra={<EllipsisOutlined />}
          >
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text strong style={{ fontSize: "22px" }}>
                $ {salesTotal}
              </Text>
              <Space>
                {filteredArray.length > 0 ? (
                  <>
                    <Statistic
                      value={11.28}
                      valueStyle={{
                        color: "#3f8600",
                        fontSize: "15px",
                      }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                    <Text style={{ fontSize: "12px" }}>
                      Compared to last month
                    </Text>
                  </>
                ) : (
                  ""
                )}
              </Space>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ borderRadius: "10px" }}
            title="Average Order Value"
            extra={<EllipsisOutlined />}
          >
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text strong style={{ fontSize: "22px" }}>
                $ {averageOrderValue ? averageOrderValue?.toFixed(2) : 0}
              </Text>
              <Space>
                {filteredArray.length > 0 ? (
                  <>
                    <Statistic
                      value={15}
                      valueStyle={{
                        color: "#cf1322",
                        fontSize: "15px",
                      }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                    <Text style={{ fontSize: "12px" }}>
                      Compared to last month
                    </Text>{" "}
                  </>
                ) : (
                  ""
                )}
              </Space>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ borderRadius: "10px" }}
            title="Total Orders"
            extra={<EllipsisOutlined />}
          >
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text strong style={{ fontSize: "22px" }}>
                {filteredArray.length}
              </Text>
              <Space>
                {filteredArray.length > 0 ? (
                  <>
                    <Statistic
                      value={44}
                      valueStyle={{
                        color: "#3f8600",
                        fontSize: "15px",
                      }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                    <Text style={{ fontSize: "12px" }}>
                      Compared to last month
                    </Text>
                  </>
                ) : (
                  ""
                )}
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row style={{ margin: "0 20px 24px 260px" }} gutter={[24, 24]}>
        <Col span={16}>
          <BarChart />
        </Col>
        <Col span={8}>
          <DoughnutChart />
        </Col>
      </Row>

      <Row style={{ margin: "0 20px 24px 260px" }} gutter={[24, 24]}>
        <Col span={24}>
          <Card
            style={{ borderRadius: "10px", marginTop: "24px" }}
            title="Recent Orders"
          >
            <Table
              style={{ paddingBottom: "50px" }}
              columns={columns}
              size="small"
              pagination={false}
              bordered={true}
              dataSource={data}
            ></Table>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Analytics;
