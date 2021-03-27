import React from 'react';
import styled from 'styled-components';
import { mixin } from '../styles/mixin';
import { AWARD_DATA } from '../data/Count';

const AwardScreen = props => {
  return (
    <>
      <AwardWrapper {...props.fadeInThree}>
        {AWARD_DATA.map((item, idx) => {
          return (
            <AwardYearItem key={idx} item={item}>
              <AwardTitle>{item.awardtitle}</AwardTitle>
              <br></br>
              <AwardContent>{item.awardcontent}</AwardContent>
            </AwardYearItem>
          );
        })}
      </AwardWrapper>
    </>
  );
};

const AwardWrapper = styled.div`
  ${mixin.flexSet('_', 'flex-start', 'center')};
  ${mixin.marginSet(50, 0, 140, 623)}
`;

const AwardYearItem = styled.div`
  height: 54px;
  margin-left: ${props => (props.item.id === 1 ? '' : '20px')};
  background-size: 54px 54px;
  line-height: 22px;
  background-image: ${props =>
    props.item.id === 2
      ? 'url(/Images/app-store@2x.png)'
      : 'url(/Images/play-store@2x.png)'};
  background-repeat: no-repeat;
  ${mixin.paddingSet(5, 0, 50, 62)};
`;

const AwardTitle = styled.span`
  ${mixin.fontSet('_', '14px')};
`;

const AwardContent = styled(AwardTitle)``;

export default AwardScreen;
