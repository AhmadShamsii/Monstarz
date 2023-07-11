import Sidebar from "../../components/sidebar";
import { StyledAdminPageHeader, StyledCard } from "../customers/styles";
import { Button, Table, Avatar, Input, Tag, Typography, Space } from "antd";

import { useState, useEffect } from "react";
import type { TableProps } from "antd";

import DeleteUser from "../../components/deleteUser";
import AddAndEdit from "../../components/addAndEditProduct";

import {
  EditTwoTone,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { Product } from "../../app/products/types";

import { productsSelector } from "../../app/products/selector";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

import ExportSVG from "../../utils/exportSVG";
import * as XLSX from "xlsx/xlsx.mjs";

const { Text } = Typography;

interface DataType {
  name: string;
  email: string;
}

const Products = () => {
  const { productsData } = useSelector(productsSelector);
  const [fetchedData, setFetchedData] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [operation, setOperation] = useState("");
  const [index, setIndex] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});

  const [searchField, setSearchField] = useState("");
  const [filteredproducts, setFilteredproducts] = useState(productsData);

  let set;
  const columns = [
    {
      title: "Product",
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
            size={74}
            style={{ marginLeft: "30px" }}
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
      sorter: (a, b) => a.first_name.localeCompare(b.first_name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Category",
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
      title: "Actions",
      dataIndex: "action",
      render: (_: any, record: any) => {
        return (
          <div style={{ display: "flex" }}>
            <DeleteUser item={"Product"} data={fetchedData} index={record} />
            <EditTwoTone
              className="edituser-icon"
              onClick={() => handleEdit(record)}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    setFetchedData(productsData);
  }, [productsData]);

  const showModalAdd = () => {
    setIsModalOpen(true);
    setOperation("add");
  };
  const handleEdit = (record) => {
    setIsModalOpen(true);
    setOperation("edit");
    setIndex(record);
  };

  useEffect(() => {
    const newFilteredproducts = productsData.filter((product) => {
      return (
        product.first_name.toLocaleLowerCase().includes(searchField) ||
        product.last_name.toLocaleLowerCase().includes(searchField) ||
        product.email.toLocaleLowerCase().includes(searchField)
      );
    });
    setFilteredproducts(newFilteredproducts);
  }, [productsData, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const dataToExport = productsData.map((data, index) => ({
    Name: `${data.first_name} ${data.last_name}`,
    Email: data.email,
  }));

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

  const handleChange: TableProps<DataType>["onChange"] = (
    _,
    filters,
    sorter
  ) => {
    setSortedInfo(sorter);
  };

  return (
    <>
      <Helmet>
        <title>Admin - Products</title>
      </Helmet>
      <Sidebar />
      <StyledAdminPageHeader
        title="Products"
        extra={
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={showModalAdd}
            shape="round"
          >
            Add Product
          </Button>
        }
      />
      <StyledCard
        title="Products Data"
        extra={
          <Space>
            <Input
              allowClear
              prefix={<SearchOutlined />}
              placeholder="Search for Customers"
              onChange={onSearchChange}
            />
            <Text strong>Export to:</Text>
            <Button
              size="small"
              type="text"
              onClick={handleExportData}
            >
              <ExportSVG />
            </Button>
          </Space>
        }
      >
        <AddAndEdit
          record={index}
          users={productsData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          operation={operation}
        />
        <Table
          style={{ paddingBottom: "50px" }}
          columns={columns}
          size="small"
          pagination={{ position: ["bottomCenter"], pageSize: 8 }}
          bordered={true}
          dataSource={filteredproducts}
          onChange={handleChange}
        ></Table>
      </StyledCard>
    </>
  );
};

export default Products;
