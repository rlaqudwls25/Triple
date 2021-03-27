import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mixin } from '../styles/mixin';
import { COUNT_DATA } from '../data/Count';

const TripSreen = props => {
  const [userCount, userSetCount] = useState(0);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

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
    userSetCount(userCount + 1);
  }, 20);

  return (
    <>
      <ImageCotent {...props.fadeInOne}>{props.date}</ImageCotent>
      <TripContent {...props.fadeInTwo}>
        {COUNT_DATA.map((item, idx) => {
          return (
            <TravlerContent key={idx} item={item}>
              <Count>
                {userCount < 350 && item.id === 1 ? userCount + 1 : '350'}
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

export default TripSreen;
