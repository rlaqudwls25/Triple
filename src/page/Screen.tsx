import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TripScreen, ITripScreenProps } from '../components/TripScreen';
import { AwardScreen, IAwardScreenProps } from '../components/AwardScreen';

export interface IScreen extends ITripScreenProps, IAwardScreenProps {}

const Screen = ({ date = '2019년 2월 기준' }) => {
  const useFadeIn = (duration = 0.7, delay = 1) => {
    const element = useRef<any | null>(null);
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, [duration, delay]);

    return { ref: element, style: { opacity: 0 } };
  };

  const fadeInOne = useFadeIn(0.7, 1);
  const fadeInTwo = useFadeIn(0.7, 2);
  const fadeInThree = useFadeIn(0.7, 3);

  return (
    <SectionContainer>
      <ContentWrapper>
        <TripScreen fadeInOne={fadeInOne} fadeInTwo={fadeInTwo} date={date} />
        <AwardScreen fadeInThree={fadeInThree} />
      </ContentWrapper>
    </SectionContainer>
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

export default Screen;
