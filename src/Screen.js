import React from "react";
import styled from "styled-components";
import { mixin } from "./styles/mixin";

const Screen = () => {
  return (
    <>
      <SectionContainer>
        <ContentWrapper>
          <ImageCotent>2021년 3월 기준</ImageCotent>
          <TripContent>
            <TravlerContent>
              <strong>630만 명</strong>
              <span>의 여행자</span>
            </TravlerContent>
            <TravlerContent>
              <strong>95만 개</strong>
              <span>의 여행 리뷰</span>
            </TravlerContent>
            <TravlerContent>
              <strong>420만 개</strong>
              <span>의 여행 일정</span>
            </TravlerContent>
          </TripContent>
          <AwardWrapper>
            <AwardYearItem>
              <span>2018 구글 플레이스토어</span>
              <br></br>
              <span>올해의 앱 최우수상 수상</span>
            </AwardYearItem>
            <AwardTodayItem>
              <span>2018 애플 앱스토어</span>
              <br></br>
              <span>오늘의 여행앱 선정</span>
            </AwardTodayItem>
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
  top: 150px;
  padding-top: 280px;
  background-size: 400px 338px;
  background-image: url(/Images/triple@2x.png);
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
  ${mixin.fontSet("_", "36px")};
  strong {
    font-weight: bold;
  }
`;

const AwardWrapper = styled.div`
  ${mixin.flexSet("_", "flex-start", "center")};
  ${mixin.marginSet(50, 0, 140, 623)}
`;

const AwardYearItem = styled.div`
  height: 54px;
  background-size: 54px 54px;
  line-height: 22px;
  background-image: url(/Images/play-store@2x.png);
  background-repeat: no-repeat;
  ${mixin.paddingSet(5, 0, 50, 62)};
  ${mixin.fontSet("_", "14px")};
`;

const AwardTodayItem = styled(AwardYearItem)`
  background-image: url(/Images/app-store@2x.png);
  background-repeat: no-repeat;
  margin-left: 32px;
`;

export default Screen;
