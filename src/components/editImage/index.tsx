import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const EditImage = ({ editedUser, handleEditUser, record }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [imageUrl, setImageUrl]: any = useState("");

  useEffect(() => {
    setFileList([
      {
        uid: record.registered.date,
        name: record.name.first,
        url: record.picture?.medium,
      },
    ]);
  }, [record]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = async ({ fileList }) => {
    setFileList(fileList);
    if (fileList.length > 0) {
      const thumbUrl = await getBase64(fileList[0].originFileObj);

      setImageUrl(thumbUrl);
    }
  };

  useEffect(() => {
    handleEditUser(imageUrl);
  }, [imageUrl, editedUser]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Change</div>
    </div>
  );

  const fileProps: any = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture-card",
    beforeUpload: () => {
      return false;
    },
  };

  return (
    <>
      <Upload
        maxCount={1}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        {...fileProps}
      >
        {uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={record.picture.medium}
        />
      </Modal>
    </>
  );
};

export default EditImage;
