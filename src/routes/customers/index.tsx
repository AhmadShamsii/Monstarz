import Sidebar from "../../components/sidebar";
import {
  PageHeader,
  Card,
  Button,
  Table,
  Avatar,
  Input,
  Tag,
  Typography,
  Space,
} from "antd";

import { useState, useEffect } from "react";

import DeleteUser from "../../components/deleteUser";
import AddAndEditCustomer from "../../components/addAndEditCustomer";

import { EditTwoTone, SearchOutlined } from "@ant-design/icons";

import { User } from "../../app/users/types";

import { usersSelector } from "../../app/users/selector";
import { useSelector } from "react-redux";

const Text = Typography;
const Title = Typography;

const Customers = () => {
  const { usersData } = useSelector(usersSelector);
  const [fetchedData, setFetchedData] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [operation, setOperation] = useState("");
  const [index, setIndex] = useState("");

  const [searchField, setSearchField] = useState("");
  const [filteredusers, setFilteredusers] = useState(usersData);

  const columns = [
    {
      title: "Name",
      width: "35%",
      render: (_, record) => {
        return (
          <Space>
            <Avatar
              shape="square"
              size={54}
              style={{
                width: "60px",
                borderRadius: "10px",
              }}
              src={record.picture.medium}
            />
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                padding: "0",
                paddingLeft: "10px",
              }}
            >
              <Title
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >{`${record.name.title}.  ${record.name.first}  ${record.name.last}`}</Title>
              <Text>{record.email}</Text>
            </Space>
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
    },
    {
      title: "City",
      render: (_, record) => <Text>{record.location.city}</Text>,
      key: "city",
    },
    {
      title: "Country",
      render: (_, record) => <Text>{record.location.country}</Text>,
      key: "country",
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
    const newFilteredUsers = usersData.filter((product) => {
      return (
        product.name.first?.toLocaleLowerCase().startsWith(searchField) ||
        product.name.last?.toLocaleLowerCase().startsWith(searchField)
      );
    });
    setFilteredusers(newFilteredUsers);
  }, [usersData, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value?.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <Sidebar />
      <div>
        <PageHeader
          title="Customers"
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <Input
              type="search"
              style={{ width: "350px", height: "30px", borderRadius: "5px" }}
              prefix={<SearchOutlined />}
              placeholder="Search by name"
              onChange={onSearchChange}
            />
            <Button
              style={{
                marginBottom: "20px",
                borderRadius: "5px",
              }}
              type="primary"
              onClick={showModalAdd}
            >
              Add Customer
            </Button>
          </div>
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
          ></Table>
        </div>
      </Card>
    </div>
  );
};

export default Customers;
