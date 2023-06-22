import { useEffect, useState } from "react";
import type { RcFile, UploadProps } from "antd/es/upload";
import { Upload, Form, Modal, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadImage = ({ handleAddUser }) => {
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [file, setFile] = useState([]);
  const [imageUrl, setImageUrl]: any = useState([]);

  const handleImageModalCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  useEffect(() => {
    handleAddUser(imageUrl);
  }, [imageUrl]);

  const handleChange = async ({ fileList }) => {
    setFile(fileList[0]);

    if (fileList.length > 0) {
      const thumbUrl = await getBase64(fileList[0].originFileObj);
      setImageUrl(thumbUrl);
    }
  };

  const fileProps: any = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture-card",
    beforeUpload: () => {
      return false;
    },
  };

  return (
    <>
      <Form.Item
        name="Image"
        label="Image"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Upload
          maxCount={1}
          onChange={handleChange}
          onPreview={handlePreview}
          {...fileProps}
        >
          <Space
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <UploadOutlined />
            <Space>Upload</Space>
          </Space>
        </Upload>
      </Form.Item>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleImageModalCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default UploadImage;
