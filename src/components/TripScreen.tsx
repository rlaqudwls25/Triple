import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mixin } from '../styles/mixin';
import { COUNT_DATA } from '../data/Count';

export interface ITripScreenProps {
  fadeInOne: object;
  fadeInTwo: object;
}

export const TripScreen = ({ fadeInOne, fadeInTwo }: ITripScreenProps) => {
  let [userCount, setUserCount] = useState(0);
  let [reviewCount, setReviewCount] = useState(0);
  let [scheduleCount, setScheduleCount] = useState(0);

  const useInterval = (callback: object, delay: number) => {
    //useRef는 렌더 사이에서 공유되는 변환 가능한 current 프로퍼티를 가지는 순수한 객체를 반환하여 최근의 callback을 저장해놓을 수 있습니다.
    const savedCallback = useRef<any | null>(null); //MutableRefObject 사용
    //RefObject 변환해서 current가 readonly가 됨
    //readonly면 current에 내용을 주입하는 용도로 useRef를 사용할 수 없다.
    useEffect(() => {
      savedCallback.current = callback; //Error
    });
    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    setUserCount(userCount < 350 ? (userCount += 1) : 350);
    setReviewCount(reviewCount + 1 < 21 ? (reviewCount += 1) : 21);
    setScheduleCount(scheduleCount + 1 < 650 ? (scheduleCount += 1) : 650);
  }, 10);

  return (
    <>
      <ImageCotent {...fadeInOne}>
        {new Date().getFullYear()}년 {new Date().getMonth()}월 기준
      </ImageCotent>
      <TripContent {...fadeInTwo}>
        {COUNT_DATA.map((item, idx) => {
          return (
            <TravlerContent key={idx}>
              <Count>
                {userCount && item.id === 1
                  ? userCount
                  : reviewCount && item.id === 2
                  ? reviewCount
                  : scheduleCount && item.id === 3
                  ? scheduleCount
                  : ''}
                {item.countTitle}
              </Count>
              <Trip>{item.countSubTitle}</Trip>
            </TravlerContent>
          );
        })}
      </TripContent>
    </>
  );
};

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
  ${mixin.fontSet('rgba(58,58,58,0.7)', '15px')};
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
  ${mixin.fontSet('#3A3A3A', '36px', 'bold')};
`;

const Trip = styled.span`
  ${mixin.fontSet('#3A3A3A', '36px', '400')};
`;
