import { Divider } from "antd";
import { Link } from "react-router-dom";
import Foooter from "../../components/footer";
import {
  StyledArrowLeftOutlined,
  StyledPageHeader,
  StyledText1,
  StyledText2,
} from "./styles";
const About = () => (
  <div style={{ marginTop: "110px" }}>
    <Link to="/">
      <StyledArrowLeftOutlined />
    </Link>
    <StyledPageHeader title="About" />
    <Divider />

    <StyledText1>
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
    </StyledText1>
    <StyledText2>
      Designed and Developed by{"   "}
      <a target="blank" href="https://github.com/AhmadShamsii">
        Ahmad Shamsi
      </a>
    </StyledText2>
    <Foooter margintop="480px" />
  </div>
);
export default About;
