import { ArrowRightOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Link } from "react-router-dom";
import {
  StyledCarousel,
  StyledTitle,
  StyledAvatar1,
  StyledAvatar2,
  StyledAvatar3,
  StyledButton,
  StyledText,
  StyledText2,
  StyledAvatar,
  StyledButton1,
} from "../styles";

const Carousel = () => {
  return (
    <StyledCarousel dotPosition="bottom" autoplaySpeed={3000}>
      <>
        <Space>
          <StyledTitle>
            Buy Monsters, Robots, Avatars <br></br> and much more
          </StyledTitle>

          <Space style={{ display: "flex" }}>
            <StyledAvatar1 size={420} src="https://robohash.org/3?=set5}" />
            <StyledAvatar2 size={320} src="https://robohash.org/1?=set2}" />
            <StyledAvatar3
              size={222}
              shape="circle"
              src="https://robohash.org/121?=set2"
            />
          </Space>
        </Space>
        <Link to="/shop">
          <StyledButton>
            Shop Now <ArrowRightOutlined />
          </StyledButton>
        </Link>
      </>
      <>
        <StyledText>Monsters</StyledText>
        <StyledText2>
          Not just Monsters, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ratione non, dignissimos quia quibusdam corporis fugiat
          laboriosam repellendus sunt unde amet veniam repudiandae aut iure
          error similique dolor molestiae? Excepturi, inventore.
        </StyledText2>
        <Link to="/shop/monsters">
          <StyledButton1>
            Shop Monsters <ArrowRightOutlined />
          </StyledButton1>
        </Link>
        <StyledAvatar
          shape="circle"
          src={`https://robohash.org/1?set=set2`}
          size={380}
        />
      </>
      <>
        <StyledText>Robots</StyledText>
        <StyledText2>
          Not just Robots, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ratione non, dignissimos quia quibusdam corporis fugiat
          laboriosam repellendus sunt unde amet veniam repudiandae aut iure
          error similique dolor molestiae? Excepturi, inventore.
        </StyledText2>
        <Link to="/shop/robots">
          <StyledButton1>
            Shop Robots <ArrowRightOutlined />
          </StyledButton1>
        </Link>
        <StyledAvatar
          shape="circle"
          src={`https://robohash.org/11?set=set1`}
          size={380}
        />
      </>
      <>
        <StyledText>Avatars</StyledText>
        <StyledText2>
          Not just Avatars, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ratione non, dignissimos quia quibusdam corporis fugiat
          laboriosam repellendus sunt unde amet veniam repudiandae aut iure
          error similique dolor molestiae? Excepturi, inventore.
        </StyledText2>

        <Link to="/shop/avatars">
          <StyledButton1>
            Shop Avatars <ArrowRightOutlined />
          </StyledButton1>
        </Link>
        <StyledAvatar
          shape="circle"
          src={`https://robohash.org/38?set=set5`}
          size={380}
        />
      </>
    </StyledCarousel>
  );
};

export default Carousel;
