import { PageHeader, Card, Typography, Space, Statistic, Tag } from "antd";
import {
  EllipsisOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import Sidebar from "../../components/sidebar/sidebar";
import BarChart from "../../components/barChart";
import DoughnutChart from "../../components/DoughnutChart";
const Title = Typography;
const Text = Typography;
const Analytics = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <PageHeader
          title="Dashboard"
          style={{ marginTop: "65px", marginLeft: "17%", fontWeight: "bold" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
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
              $3799
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
              $272.98
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
              $3799
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
        <Title style={{ fontSize: "15.5px", fontWeight: "bold" }}>
          Recent Orders
        </Title>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "10px 20px",
            fontSize: "15px",
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>Order Id</Text>
          <Text>Date</Text>
          <Text>Customer</Text>
          <Text>Items</Text>
          <Text>Paid</Text>
          <Text>Status</Text>
          <Text>Total</Text>
        </div>
        <div
          style={{
            padding: "10px 20px",
            fontSize: "15px",
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>#0074</Text>
          <Text>12-06-2023</Text>
          <Text>Ahmad Tanveer</Text>
          <Text>2 Items</Text>
          <Text>
            <Tag color="success">Yes</Tag>
          </Text>
          <Text>
            <Tag color="processing">Pending</Tag>
          </Text>

          <Text style={{ fontWeight: "bold" }}>$2000</Text>
        </div>
        <div
          style={{
            padding: "10px 20px",
            fontSize: "15px",
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>#0075</Text>
          <Text>12-06-2023</Text>
          <Text>Zia ur Rehaman</Text>
          <Text>4 Items</Text>
          <Text>
            <Tag color="success">Yes</Tag>
          </Text>
          <Text>
            <Tag style={{ width: "60px", textAlign: "center" }} color="success">
              Done
            </Tag>
          </Text>

          <Text style={{ fontWeight: "bold" }}>$4000</Text>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
