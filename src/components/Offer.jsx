import styled from 'styled-components';
import Button from './Button';
import Slider from './Slider';

const Offer = () => {
  return (
    <Wrapper>
      <div className='offer container'>
        <div className='bgc_y'></div>
        <div className='offer__container'>
          <div className='offer__text'>
            <h2 className='title'>What can we offer you?</h2>
            <div className='offer__descr'>
              Our main idea is proper nutrition. It can be simple and delicious.
              We are not just delivery, we are service! We took upon ourselves
              all the calculations of nutritional food, calories, portion sizes
              and other important but boring aspects. All you have left is
              healthy, satisfying and proper food, which we deliver right to
              your door.
            </div>
          </div>
          <div className='offer__action'>
            <Button title='Connect with us' firstC='#000' secondC='#fff' />
          </div>
        </div>
        <div className='offer__container'>
          <div className='offer__advantages'>
            <h2>Fast and helpful</h2>
            <div className='offer__advantages-text'>
              Cooking at home takes a lot of effort, time and nerves. We deliver
              food immediately for the whole day, and you can act as you wish,
              without having to adjust to anyone and being confident in the
              quality of the product!
            </div>
            <h2>The right diet</h2>
            <div className='offer__advantages-text'>
              We have developed a special menu that takes into account all the
              nuances of proper nutrition, from the balance of dietary
              supplements to their preparation and division of the diet.
            </div>
          </div>

          <Slider/>

        </div>
      </div>
    </Wrapper>
  );
};
export default Offer;

const Wrapper = styled.section`
  .offer {
    padding: 70px 0 100px 0;
    position: relative;

    .offer__container {
      max-width: var(--mw-1280);
      margin: 0 auto;
      padding: 0 15px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }

    .bgc_y {
      position: absolute;
      max-width: 1109px;
      width: 80vw;
      height: 780px;
      background: rgba(243, 255, 222, 0.45);
      z-index: -1;
      top: 50px;

      @media(max-width: 600px){
        height: 100%;
      }
    }

    .offer__text {
      width: 580px;
      @media (max-width: 600px) {
        width: auto;
      }
    }

    .offer__descr {
      font-size: 18px;
      margin-top: 30px;
      font-weight: 300;
      line-height: 24px;
    }

    .offer__action {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media (max-width: 600px) {
        justify-content: center;
        margin: 40px 0 0 0;
      }
    }

    .offer__advantages { 
      margin-top: 50px;
      padding: 0 30px 0 0;

      h2 {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;

        &:first-child {
          margin-top: 70px;
          @media(max-width: 600px){
            margin-top: 0;
          }
        }
      }

      &-text {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 300;
        line-height: 21px;
      }
    }
  }
`;
