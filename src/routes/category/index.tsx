import Sidebar from "../../components/sidebar/sidebar";
import { PageHeader } from "antd";

const Category = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <PageHeader
          title="Category"
          style={{ marginTop: "70px", marginLeft: "20.5%" }}
        />
      </div>
    </div>
  );
};

export default Category;
