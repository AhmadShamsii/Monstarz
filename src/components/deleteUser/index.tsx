import { ExclamationCircleFilled } from "@ant-design/icons";
import { Popconfirm, Space } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeUser } from "../../app/users/slice";

const showDeleteConfirm = (index, data) => {
  const dispatch = useDispatch();
  return (
    <Popconfirm
      title="Are you sure delete this product?"
      icon={<ExclamationCircleFilled />}
      okText="Yes"
      okType="danger"
      cancelText="No"
      onConfirm={() => dispatch(removeUser({ index, data }))}
      onCancel={() => console.log("Cancel")}
    >
      <DeleteTwoTone className=" deleteuser-icon" twoToneColor="#eb2f96" />
    </Popconfirm>
  );
};

const DeleteUser = ({ index, data }) => (
  <Space wrap>{showDeleteConfirm(index, data)}</Space>
);

export default DeleteUser;
