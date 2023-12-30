import {
  StyledSpace3,
  StyledSiteInfo,
  StyledSiteInfoIcon1,
  StyledSiteInfoSpace,
  StyledSiteInfoTitle,
  StyledSiteInfoText,
  StyledSiteInfoIcon2,
  StyledSiteInfoIcon3,
  StyledSiteInfoIcon4,
} from "../styles";

const Features = () => {
  return (
    <StyledSpace3 className="pathclip">
      <StyledSiteInfo>
        <StyledSiteInfoIcon1 />
        <StyledSiteInfoSpace>
          <StyledSiteInfoTitle>Track Your Order</StyledSiteInfoTitle>
          <StyledSiteInfoText>
            Click here for quick update and info
          </StyledSiteInfoText>
        </StyledSiteInfoSpace>
      </StyledSiteInfo>
      <StyledSiteInfo>
        <StyledSiteInfoIcon2 />
        <StyledSiteInfoSpace>
          <StyledSiteInfoTitle>Support 24/7</StyledSiteInfoTitle>
          <StyledSiteInfoText>
            Contact us 24 hours a day, 7 days a week
          </StyledSiteInfoText>
        </StyledSiteInfoSpace>
      </StyledSiteInfo>
      <StyledSiteInfo>
        <StyledSiteInfoIcon3 />
        <StyledSiteInfoSpace>
          <StyledSiteInfoTitle>100% Payment Secure</StyledSiteInfoTitle>
          <StyledSiteInfoText>
            We ensure secure payment with PEV
          </StyledSiteInfoText>
        </StyledSiteInfoSpace>
      </StyledSiteInfo>
      <StyledSiteInfo>
        <StyledSiteInfoIcon4 />
        <StyledSiteInfoSpace>
          <StyledSiteInfoTitle>Payment Methods</StyledSiteInfoTitle>
          <StyledSiteInfoText>
            COD, Credit Card: Visa, Master Card
          </StyledSiteInfoText>
        </StyledSiteInfoSpace>
      </StyledSiteInfo>
    </StyledSpace3>
  );
};
export default Features;
