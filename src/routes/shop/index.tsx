import { Card, PageHeader, Divider, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../app/users/selector";
import Foooter from "../../components/footer/footer";
const { Text } = Typography;

const Shop = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector(usersSelector);
  const data = usersData;

  return (
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
      <PageHeader className="font-family-tertiary"
        title="Categories"
        style={{ marginTop: "50px", marginLeft: "10.5%"}}
      />
      <Divider />
      <div className="cardlist-page">
        <Link to="monsters">
          <Card
            className="font-family-primary"
            hoverable
            style={{
              width: "75%",
              margin: "0",
              backgroundColor: "white",
              borderRadius: "5px",
              textAlign: "center",
            }}
            cover={
              <img alt="example" src={`https://robohash.org/1?set=set2`} />
            }
          >
            <Text
              style={{ fontSize: "42px", color: "black", fontWeight: "600" }}
            >
              Monsters
            </Text>
          </Card>
        </Link>
        <Link to="robots">
          <Card
            className="font-family-primary"
            hoverable
            style={{
              width: "75%",
              margin: "0",
              backgroundColor: "white",
              borderRadius: "5px",
              textAlign: "center",
            }}
            cover={
              <img alt="example" src={`https://robohash.org/3?set=set1`} />
            }
          >
            <Text
              style={{ fontSize: "42px", color: "black", fontWeight: "600" }}
            >
              Robots
            </Text>
          </Card>{" "}
        </Link>

        <Link to="avatars">
          <Card
            className="font-family-primary"
            hoverable
            style={{
              width: "75%",
              margin: "0",
              backgroundColor: "white",
              borderRadius: "5px",
              textAlign: "center",
            }}
            cover={
              <img alt="example" src={`https://robohash.org/2?set=set5`} />
            }
          >
            <Text
              style={{ fontSize: "42px", color: "black", fontWeight: "600" }}
            >
              Avatars
            </Text>
          </Card>{" "}
        </Link>

        <Link to="roboHeads">
          <Card
            className="font-family-primary"
            hoverable
            style={{
              width: "75%",
              margin: "0",
              backgroundColor: "white",
              borderRadius: "5px",
              textAlign: "center",
            }}
            cover={
              <img alt="example" src={`https://robohash.org/3?set=set3`} />
            }
          >
            <Text
              style={{ fontSize: "42px", color: "black", fontWeight: "600" }}
            >
              Robo Heads
            </Text>
          </Card>
        </Link>
      </div>
      <Foooter margintop="150px" />
    </div>
  );
};
export default Shop;
