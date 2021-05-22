import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TripScreen, ITripScreenProps } from '../components/TripScreen';
import { AwardScreen, IAwardScreenProps } from '../components/AwardScreen';

export interface IScreen extends ITripScreenProps, IAwardScreenProps {}

const Screen = () => {
  const useFadeIn = (duration = 0.7, delay = 1) => {
    const element = useRef<any | null>(null);
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        // transition-duration : 트랜지션이 일어나는 지속 시간을 명시하는 속성
        // transition-delay : 속성이 변하는 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간
        current.style.opacity = 1;
      }
    }, [delay, duration]);

    return { ref: element, style: { opacity: 0 } };
  };

  const fadeInOne = useFadeIn(0.7, 1);
  const fadeInTwo = useFadeIn(0.7, 2);
  const fadeInThree = useFadeIn(0.7, 3);

  return (
    <SectionContainer>
      <ContentWrapper>
        <TripScreen fadeInOne={fadeInOne} fadeInTwo={fadeInTwo} />
        <AwardScreen fadeInThree={fadeInThree} />
      </ContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  min-width: 1200px;
`;

const ContentWrapper = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
`;

export default Screen;
