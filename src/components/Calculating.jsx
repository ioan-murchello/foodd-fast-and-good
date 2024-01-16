import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const activityArray = [
  { id: 0, title: 'Very low activity' },
  { id: 1, title: 'Low activity' },
  { id: 2, title: 'Moderate activity' },
  { id: 3, title: 'High activity' },
];

const active = ['1.2', '1.375', '1.55', '1.725'].reverse();

const Calculating = () => {
  const heightRef = useRef();
  const weightRef = useRef();
  const ageRef = useRef();

  const [result, setResult] = useState(0);
  const [activity, setActivity] = useState(1);
  const [gender, setGender] = useState(0);

  const onHandleChange = () => {
    const weightR = +(heightRef.current && heightRef.current.value) || 0;
    const heightR = +(weightRef.current && weightRef.current.value) || 0;
    const ageR = +(ageRef.current && ageRef.current.value) || 0;

    let res;
    if (!heightR || !weightR || !ageR) return;

    if (gender === 1) {
      res = Math.round(
        447.6 +
          9.2 * weightR +
          3.1 * heightR -
          4.3 * ageR * Number(active[activity])
      );
    } else {
      res = Math.round(
        88.36 +
          13.4 * weightR +
          4.8 * heightR -
          5.7 * ageR * Number(active[activity])
      );
    }

    if (res !== '' || res !== undefined) {
      setResult(res);
    }
  };

  const onSetWoman = () => {
    setGender(1);
  };
  const onSetMan = () => {
    setGender(0);
  };

  useEffect(() => {
    onHandleChange();
  }, [gender, activity]);
  return (
    <Wrapper>
      <div className='calculating'>
        <div className='bgc_y'></div>

        <div className='container'>
          <h2 className='title'>Let's calculate your calorie needs?</h2>
          <div className='calculating__field'>
            <div className='calculating__subtitle'>What's your gender</div>
            <div className='calculating__choose' id='gender'>
              <div
                className={`calculating__choose-item ${
                  gender === 1 ? 'calculating__choose-item_active' : ''
                }`}
                onClick={onSetWoman}
              >
                Woman
              </div>
              <div
                className={`calculating__choose-item ${
                  gender === 0 ? 'calculating__choose-item_active' : ''
                }`}
                onClick={onSetMan}
              >
                Man
              </div>
            </div>

            <div className='calculating__subtitle'>Your data</div>
            <div className='calculating__choose calculating__choose_medium'>
              <label>
                Height
                <input
                  type='number'
                  min='80'
                  max='230'
                  id='height'
                  placeholder='Height'
                  className='calculating__choose-item'
                  ref={heightRef}
                  onChange={onHandleChange}
                  defaultValue='175'
                />
              </label>
              <label>
                Weight
                <input
                  type='number'
                  min='10'
                  max='130'
                  id='weight'
                  placeholder='Weight'
                  className='calculating__choose-item'
                  ref={weightRef}
                  onChange={onHandleChange}
                  defaultValue='75'
                />
              </label>
              <label>
                Age
                <input
                  type='number'
                  min='3'
                  max='100'
                  id='age'
                  placeholder='Age'
                  className='calculating__choose-item'
                  ref={ageRef}
                  onChange={onHandleChange}
                  defaultValue='27'
                />
              </label>
            </div>

            <div className='calculating__subtitle'>
              Choose your physical activity
            </div>
            <div className='calculating__choose calculating__choose_big'>
              {activityArray.map((el) => {
                return (
                  <div
                    key={el.id}
                    className={` ${
                      el.id === activity
                        ? 'calculating__choose-item calculating__choose-item_active'
                        : 'calculating__choose-item'
                    }`}
                    onClick={() => setActivity(el.id)}
                  >
                    {el.title}{' '}
                  </div>
                );
              })}
            </div>

            <div className='calculating__total'>
              <div className='calculating__subtitle'>
                Your daily calorie intake:
              </div>
              <div className='calculating__result'>
                <span>{result}</span> kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Calculating;

const Wrapper = styled.section`
  .calculating {
    padding: 50px 0;
    position: relative;
  }
  .title {
    text-align: center;
  }

  .calculating__field {
    width: 100%;
    margin-top: 50px;
    /* background: rgba(146, 242, 255, 0.15); */
    padding: 30px 0 40px 0;
  }
  .calculating__subtitle {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }

  #gender:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 16px;
    height: 16px;
    background: url('../assets/icons/switch.svg') center no-repeat;
    background-size: cover;
  }

  .calculating__choose {
    position: relative;
    display: flex;
    margin-top: 30px;
    justify-content: center;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 170px;
      height: 50px;
      padding: 0 10px;
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      border: none;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      outline: none;
      transition: 0.3s all;

      &_active {
        color: #fff;
        background-color: yellowgreen;
      }

      @media (max-width: 992px) {
        width: 140px;
      }
    }

    &_medium {
      justify-content: center;
      column-gap: 50px;
      margin: 30px auto 0 auto;

      @media (max-width: 992px) {
        column-gap: 30px;
      }
      @media (max-width: 768px) {
        column-gap: 30px;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
      }
    }

    &_big {
      justify-content: center;
      column-gap: 50px;
      margin: 30px auto 0 auto;

      @media (max-width: 992px) {
        column-gap: 30px;
      }
      @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
      }

      .calculating__choose-item {
        width: 200px;

        @media (max-width: 992px) {
          width: 160px;
        }
        @media (max-width: 768px) {
          width: 120px;
        }
        @media (max-width: 600px) {
          width: 90%;
        }
      }
    }
  }

  .calculating__divider {
    width: 490px;
    height: 1px;
    margin: 40px auto;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .calculating__total {
    max-width: 490px;
    width: 100%;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  .calculating__result {
    font-size: 18px;
    font-weight: bold;

    span {
      font-size: 2.625rem;

      @media (max-width: 992px) {
        font-size: 2.1rem;
      }
      @media (max-width: 600px) {
        font-size: 1.3rem;
      }
    }
  }

  .bgc_y {
    position: absolute;
    width: 65%;
    height: 80%;
    background: rgba(146, 242, 255, 0.15);
    z-index: -1;
    top: 100px;
    right: 0;
  }
`;
