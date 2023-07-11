import Sidebar from "../../components/sidebar";
import { StyledAdminPageHeader, StyledCard, StyledSpace } from "./styles";
import {
  PageHeader,
  Card,
  Button,
  Table,
  Avatar,
  Input,
  Typography,
  Space,
} from "antd";

import { useState, useEffect } from "react";

import DeleteUser from "../../components/deleteUser";
import AddAndEditCustomer from "../../components/addAndEditCustomer";
import ExportSVG from "../../utils/exportSVG";
import {
  EditTwoTone,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { User } from "../../app/users/types";

import { usersSelector } from "../../app/users/selector";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

import * as XLSX from "xlsx/xlsx.mjs";

const { Text, Title, Link } = Typography;

const Customers = () => {
  const { usersData } = useSelector(usersSelector);
  const [fetchedData, setFetchedData] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [operation, setOperation] = useState("");
  const [index, setIndex] = useState("");

  const [searchField, setSearchField] = useState("");
  const [filteredusers, setFilteredusers] = useState(usersData);
  const [sortedInfo, setSortedInfo] = useState({});

  const columns = [
    {
      title: "Name",
      width: "35%",
      sorter: (a, b) => a.name.first.localeCompare(b.name.first),
      render: (_, record) => {
        return (
          <Space>
            <Avatar
              size={60}
              style={{
                borderRadius: "10px",
              }}
              src={record.picture.medium}
            />
            <StyledSpace>
              <Text
                strong
              >{`${record.name.title}.  ${record.name.first}  ${record.name.last}`}</Text>
              <Text>{record.email}</Text>
            </StyledSpace>
          </Space>
        );
      },

      key: "name",
    },
    {
      title: "Registered",
      render: (_, record) => (
        <Text>
          {record.registered.date.slice(0, record.registered.date.indexOf("T"))}
        </Text>
      ),
      key: "registered",
      sorter: (a, b) => a.registered.date.localeCompare(b.registered.date),
    },
    {
      title: "City",
      render: (_, record) => <Text>{record.location.city}</Text>,
      key: "city",
      sorter: (a, b) => a.location.city.localeCompare(b.location.city),
    },
    {
      title: "Country",
      render: (_, record) => <Text>{record.location.country}</Text>,
      key: "country",
      sorter: (a, b) => a.location.country.localeCompare(b.location.country),
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (_: any, record: any) => {
        return (
          <div style={{ display: "flex" }}>
            <DeleteUser item={"Customer"} data={fetchedData} index={record} />
            <EditTwoTone
              className="edituser-icon"
              onClick={() => handleEdit(record)}
            />
          </div>
        );
      },
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  useEffect(() => {
    setFetchedData(usersData);
  }, [usersData]);

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
    const newFilteredUsers = usersData.filter((user) => {
      return (
        user.name.first?.toLocaleLowerCase().includes(searchField) ||
        user.name.last?.toLocaleLowerCase().includes(searchField) ||
        user.email?.toLocaleLowerCase().includes(searchField) ||
        user.registered.date?.toLocaleLowerCase().includes(searchField) ||
        user.location.city?.toLocaleLowerCase().includes(searchField) ||
        user.location.country?.toLocaleLowerCase().includes(searchField)
      );
    });
    setFilteredusers(newFilteredUsers);
  }, [usersData, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value?.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const usersDataToExport = usersData.map((user) => ({
    Name: `${user.name.title}.  ${user.name.first}  ${user.name.last}`,
    Email: user.email,
    Registered: user.registered.date.slice(
      0,
      user.registered.date.indexOf("T")
    ),
    City: user.location.city,
    Country: user.location.country,
  }));

  const handleExportData = () => {
    const secondTableDataToExport = usersDataToExport.slice(0, 10);

    const workBook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(usersDataToExport);

    const firstTableEndRow = usersDataToExport.length;
    const firstTableTotalRow = ["Total", usersDataToExport.length];

    const secondTableStartRow = firstTableEndRow + 4;
    const secondTableEndRow =
      secondTableStartRow + secondTableDataToExport.length - 1;
    const secondTableTotalRow = ["Total", secondTableDataToExport.length];

    XLSX.utils.sheet_add_json(worksheet, [firstTableTotalRow], {
      skipHeader: true,
      origin: XLSX.utils.encode_cell({ r: firstTableEndRow + 2, c: 0 }),
    });

    XLSX.utils.sheet_add_json(worksheet, secondTableDataToExport, {
      skipHeader: false,
      origin: XLSX.utils.encode_cell({ r: secondTableStartRow, c: 0 }),
    });

    XLSX.utils.sheet_add_json(worksheet, [secondTableTotalRow], {
      skipHeader: true,
      origin: XLSX.utils.encode_cell({ r: secondTableEndRow + 3, c: 0 }),
    });

    const maxColumnWidths = {
      Name: 30,
      Age: 30,
      City: 30,
      Country: 30,
    };

    const columnWidths = Object.keys(maxColumnWidths).map((key) => ({
      wch: maxColumnWidths[key],
    }));

    worksheet["!cols"] = columnWidths;
    XLSX.utils.book_append_sheet(workBook, worksheet, "Sheet1");

    XLSX.writeFile(workBook, "Customers_Data.xlsx");
  };

  return (
    <>
      <Helmet>
        <title>Admin - Customers</title>
      </Helmet>
      <Sidebar />
      <StyledAdminPageHeader
        title="Customers"
        extra={
          <Button
            icon={<UserAddOutlined />}
            type="primary"
            onClick={showModalAdd}
            shape="round"
          >
            Add Customer
          </Button>
        }
      />
      <StyledCard
        title="Customers Data"
        extra={
          <Space>
            <Input
              allowClear
              prefix={<SearchOutlined />}
              placeholder="Search for Customers"
              onChange={onSearchChange}
            />
            <Text strong>Export to:</Text>
            <Button size="small" type="text" onClick={handleExportData}>
              <ExportSVG />
            </Button>
          </Space>
        }
      >
        <>
          <AddAndEditCustomer
            record={index}
            users={usersData}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            operation={operation}
          />
          <Table
            style={{ paddingBottom: "50px" }}
            columns={columns}
            size="small"
            pagination={{ position: ["bottomCenter"], pageSize: 10 }}
            bordered={true}
            dataSource={filteredusers}
            onChange={handleChange}
          ></Table>
        </>
      </StyledCard>
    </>
  );
};

export default Customers;
