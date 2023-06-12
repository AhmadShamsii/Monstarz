import Sidebar from "../../components/sidebar/sidebar";
import { PageHeader, Card, Button, Table, Avatar, Input, Tag } from "antd";

import { useState, useEffect } from "react";

import DeleteUser from "../../components/deleteUser/deleteUser";
import AddAndEdit from "../../components/addAndEdit/addAndEditModal";

import { EditTwoTone, SearchOutlined } from "@ant-design/icons";

import { User } from "../../app/users/types";

import { usersSelector } from "../../app/users/selector";
import { useSelector } from "react-redux";

const Products = () => {
  const { usersData } = useSelector(usersSelector);
  const [fetchedData, setFetchedData] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [operation, setOperation] = useState("");
  const [index, setIndex] = useState("");

  const [searchField, setSearchField] = useState("");
  const [filteredproducts, setFilteredproducts] = useState(usersData);

  console.log(usersData);

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
            size={64}
            style={{ width: "100px", marginLeft: "30px" }}
            src={`https://robohash.org/${record.id}?set=set${set}`}
          />
        );
      },

      key: "name",
    },
    {
      title: "Name",
      render: (_, record) => `${record.first_name} ${record.last_name}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
            <DeleteUser data={fetchedData} index={record} />
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
    const newFilteredproducts = usersData.filter((product) => {
      return product.first_name.toLocaleLowerCase().startsWith(searchField);
    });
    setFilteredproducts(newFilteredproducts);
  }, [usersData, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <Sidebar />
      <div>
        <PageHeader
          title="Products"
          style={{ marginTop: "65px", marginLeft: "17%", fontWeight: "bold" }}
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
              placeholder=" Search Products"
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
              Add Product
            </Button>
          </div>
          <AddAndEdit
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
            pagination={{ position: ["bottomCenter"], pageSize: 8 }}
            bordered={true}
            dataSource={filteredproducts}
          ></Table>
        </div>
      </Card>
    </div>
  );
};

export default Products;
