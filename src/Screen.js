import React from "react";
import styled from "styled-components";
import { mixin } from "./styles/mixin";
import { COUNT_DATA, AWARD_DATA } from "./data/Count";

const Screen = ({ date = "2021년 3월 기준" }) => {
  return (
    <>
      <SectionContainer>
        <ContentWrapper>
          <ImageCotent>{date}</ImageCotent>
          <TripContent>
            {COUNT_DATA.map((item, idx) => {
              return (
                <TravlerContent key={idx} item={item}>
                  <Count>{item.title}</Count>
                  <Trip>{item.subtitle}</Trip>
                </TravlerContent>
              );
            })}
          </TripContent>
          <AwardWrapper>
            {AWARD_DATA.map((item, idx) => {
              return (
                <AwardYearItem key={idx} item={item}>
                  <span>{item.awardtitle}</span>
                  <br></br>
                  <span>{item.awardcontent}</span>
                </AwardYearItem>
              );
            })}
          </AwardWrapper>
        </ContentWrapper>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.section`
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
`;

const ImageCotent = styled.div`
  position: absolute;
  width: 400px;
  height: 330px;
  padding-top: 280px;
  top: 150px;
  background-size: 400px 338px;
  background-image: url(/Images/triple@2x.png);
  background-repeat: no-repeat;
  text-align: center;
  ${mixin.fontSet("rgba(58,58,58,0.7)", "15px")};
`;

const TripContent = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`;

const TravlerContent = styled.div`
  margin-bottom: 20px;
  letter-spacing: -1px;
`;

const Count = styled.strong`
  ${mixin.fontSet("#3A3A3A", "36px", "bold")};
`;

const Trip = styled.span`
  ${mixin.fontSet("#3A3A3A", "36px", "400")};
`;

const AwardWrapper = styled.div`
  ${mixin.flexSet("_", "flex-start", "center")};
  ${mixin.marginSet(50, 0, 140, 623)}
`;

const AwardYearItem = styled.div`
  height: 54px;
  margin-left: ${(props) => (props.item.id === 1 ? "" : "20px")};
  background-size: 54px 54px;
  line-height: 22px;
  background-image: ${(props) =>
    props.item.id === 2
      ? "url(/Images/app-store@2x.png)"
      : "url(/Images/play-store@2x.png)"};
  background-repeat: no-repeat;
  ${mixin.paddingSet(5, 0, 50, 62)};
  ${mixin.fontSet("_", "14px")}
`;

export default Screen;
