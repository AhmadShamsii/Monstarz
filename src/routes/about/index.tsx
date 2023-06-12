import { Typography, PageHeader, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Foooter from "../../components/footer/footer";
const Text = Typography;
const About = () => (
  <div style={{ marginTop: "110px" }}>
  <Link to="/">
      <ArrowLeftOutlined
        style={{
          fontSize: "16px",
          position: "absolute",
          top: "149px",
          left: "10%",
          color: "black",
        }}
      />
    </Link>
    <PageHeader  className="font-family-tertiary"
      title="About"
      style={{ marginTop: "113px", marginLeft: "10.5%" }}
    />
    <Divider />

    <Text
      style={{
        width: "50%",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, minima
      nulla. Dignissimos quo quisquam corrupti ratione nam illo deserunt
      asperiores libero consectetur quos quam eaque, excepturi iure. Inventore,
      quam nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto nobis sint, quisquam totam labore ipsum harum ad mollitia atque
      pariatur dolor eveniet, voluptatibus odit, exercitationem magni ut natus
      illum. Perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Nostrum natus fuga fugit laboriosam, aut dolorem aliquid, minima
      sunt totam excepturi libero repudiandae. Non doloribus beatae nihil quia
      blanditiis, natus perferendis? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Repudiandae ipsa vel earum quo praesentium quis suscipit
      saepe autem, ex pariatur odit, aspernatur animi exercitationem, placeat
      incidunt obcaecati quam distinctio laboriosam.
    </Text>
    <Text
      style={{
        position: "absolute",
        bottom: "30%",
        left: "50%",
        transform: "translate(-50%)",
        fontWeight: "bold",
      }}
    >
      Designed and Developed by{" "}
      <a target="blank" href="https://github.com/AhmadShamsii">
        Ahmad Shamsi{" "}
      </a>
    </Text>
    <Foooter margintop="480px" />
    </div>);
export default About;
