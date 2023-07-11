import Sidebar from "../../components/sidebar";
import { StyledAdminPageHeader, StyledCard } from "../customers/styles";
import { Table, Tag, Typography, Tooltip, Divider, Button, Space } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { Helmet } from "react-helmet-async";
import * as XLSX from "xlsx/xlsx.mjs";

import ExportSVG from "../../utils/exportSVG";
const { Text, Link, Title } = Typography;

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

  const dataToExport = filteredArray.map((data, index) => ({
    Order_Id: `${index + 1}`,
    Date: data[0].date,
    Time: data[0].time,
    Price: `$ ${data.reduce((total, item) => total + item.quantity, 0) * 100}`,
    Status: "Paid",
  }));

  const handleRowClick = (record) => {
    navigate(`${record.orderId}`);
  };

  const handleExportData = () => {
    const workBook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);

    const firstTableEndRow = dataToExport.length;
    const firstTableTotalRow = ["Total", dataToExport.length];

    XLSX.utils.sheet_add_json(worksheet, [firstTableTotalRow], {
      skipHeader: true,
      origin: XLSX.utils.encode_cell({ r: firstTableEndRow + 2, c: 0 }),
    });

    const maxColumnWidths = {
      Order_Id: 30,
      Date: 30,
      Time: 30,
      Price: 30,
      Status: 30,
    };

    const columnWidths = Object.keys(maxColumnWidths).map((key) => ({
      wch: maxColumnWidths[key],
    }));

    worksheet["!cols"] = columnWidths;

    XLSX.utils.book_append_sheet(workBook, worksheet, "Sheet1");

    XLSX.writeFile(workBook, "Customers_Data.xlsx");
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
        <Link underline onClick={() => handleRowClick(record)}>
          Order # {text}
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
        <title>Admin - Orders</title>
      </Helmet>
      <Sidebar />
      <StyledAdminPageHeader title="Orders" />
      <StyledCard
        title={filteredArray.length > 0 ? "Placed Orders" : ""}
        extra={
          filteredArray.length > 0 ? (
            <Space>
              <Text strong>Export to:</Text>
              <Button size="small" type="text" onClick={handleExportData}>
                <ExportSVG />
              </Button>
            </Space>
          ) : (
            ""
          )
        }
      >
        {filteredArray.length > 0 ? (
          <Table
            style={{ paddingBottom: "50px" }}
            columns={columns}
            size="small"
            pagination={{ position: ["bottomCenter"], pageSize: 8 }}
            bordered={true}
            dataSource={data}
          ></Table>
        ) : (
          <>
            <Title style={{ fontSize: "18px" }}>Placed Orders List</Title>
            <Divider />
            <Text>
              No order is placed yet! Please make sure to place an order first.
            </Text>
          </>
        )}
      </StyledCard>
    </>
  );
};

export default Orders;
