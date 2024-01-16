import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { timer } from '../helpers/timer';
const deadline = '2024-01-16T11:50:00';

const Promotion = () => {
  const [time, setTime] = useState({});

  const onSetTime = (times) => {
    setTime(times);
    if (times?.total === 0) {
    }
  };

  useEffect(() => {
    const tt = timer(deadline, onSetTime);

    if (tt <= '0') {
      setTime({ t: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    }

    return () => {
      clearInterval(tt);
    };
  }, [deadline]);

  return (
    <Wrapper>
      <div className='promotion'>
        <div className='bgc_y'></div>
        <div className='container'>
          <div className='promotion__text'>
            <div className='title'>Promotion for new clients!</div>
            <div className='promotion__descr'>
              We value every client and offer you to become one of them on very
              favorable terms. Anyone who orders food delivery for a week will
              be given a discount of<span>20%!</span>
              <br />
              The promotion will end on May 20 at 00:00
            </div>
          </div>
          <div className='promotion__timer'>
            <div className='title'>
              Remaining until the end of the promotion:
            </div>
            <div className='timer'>
              <div className='timer__block'>
                <span id='days'>{time?.days ? time.days : '00'}</span>
                days
              </div>
              <div className='timer__block'>
                <span id='hours'>{time?.hours ? time.hours : '00'}</span>
                hours
              </div>
              <div className='timer__block'>
                <span id='minutes'>{time?.minutes ? time.minutes : '00'}</span>
                minutes
              </div>
              <div className='timer__block'>
                <span id='seconds'>{time?.seconds ? time.seconds : '00'}</span>
                seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Promotion;

const Wrapper = styled.section`
  .promotion {
    padding: 70px 0 240px 0;
    position: relative;
    @media (max-width: 992px) {
      padding: 70px 0 140px 0;
    }
    .container {
      display: flex;
      @media (max-width: 992px) {
        flex-direction: column;
      }
    }
    .bgc_y {
      position: absolute;
      width: 50%;
      height: 499px;
      background: rgba(243, 255, 222, 0.35);
      z-index: -1;
      top: -50px;
      left: 0;
    }
    &__text {
      .title {
        font-size: 30px;
      }
    }
    &__descr {
      margin-top: 40px;
      font-size: 20px;
      line-height: 29px;
      font-weight: 300;
      span {
        font-weight: bold;
        font-size: 26px;
        margin: 0 15px;
        @media (max-width: 600px) {
          font-size: 20px;
        }
      }
    }
    &__timer {
        @media(max-width: 1124px){
            margin: 0 0 0 15px;
        }
      .title {
        text-align: right;
        font-size: 22px;

        @media (max-width: 992px) {
          text-align: center;
        }
      }
      @media (max-width: 992px) {
        margin: 30px 0 0 0;
      }
      .timer {
        margin-top: 60px;
        padding-left: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 10px;

        @media (max-width: 1124px) {
          justify-content: center;
          padding-left: 0;
          margin-top: 30px;
        }
        @media (max-width: 600px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 10px;
        }
        &__block {
          padding: 20px;
          background: #ffffff;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
          font-size: 16px;
          font-weight: 300;
          text-align: center;
          span {
            display: block;
            margin-top: 20px;
            margin-bottom: 5px;
            font-size: 56px;
            font-weight: bold;

            @media (max-width: 992px) {
              font-size: 35px;
            }
            @media (max-width: 600px) {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
`;
