import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TripSreen from '../components/TripSrceen';
import AwardScreen from '../components/AwardScreen';

const Screen = () => {
  const useFadeIn = (duration = 0.7, delay = 1) => {
    // if (typeof duration !== 'number' || typeof delay !== 'number') {
    //   return;
    // }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, []);

    return { ref: element, style: { opacity: 0 } };
  };

  const fadeInOne = useFadeIn(0.7, 1);
  const fadeInTwo = useFadeIn(0.7, 2);
  const fadeInThree = useFadeIn(0.7, 3);

  return (
    <SectionContainer>
      <ContentWrapper>
        <TripSreen fadeInOne={fadeInOne} fadeInTwo={fadeInTwo} />
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
