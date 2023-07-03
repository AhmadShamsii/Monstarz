import { ExclamationCircleFilled } from "@ant-design/icons";
import { Popconfirm, Space } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeUser } from "../../app/users/slice";

const showDeleteConfirm = (index, data, item) => {
  const dispatch = useDispatch();
  return (
    <Popconfirm
      title={`Are you sure you want to delete this ${item}?`}
      icon={<ExclamationCircleFilled />}
      okText="Yes"
      okType="danger"
      cancelText="No"
      onConfirm={() => dispatch(removeUser({ index, data }))}
      onCancel={() => console.log("Cancel")}
      overlayStyle={{ width: "270px" }}
    >
      <DeleteTwoTone className=" deleteuser-icon" twoToneColor="#eb2f96" />
    </Popconfirm>
  );
};

const DeleteUser = ({ index, data, item }) => (
  <Space wrap>{showDeleteConfirm(index, data, item)}</Space>
);

export default DeleteUser;
