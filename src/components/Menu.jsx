import styled from 'styled-components';

const tabs = [
  {
    id: 1,
    type: 'fitness',
    desc: 'The "Fitness" menu is a new approach to cooking: more fresh vegetables and fruits. For people who are interested in sports; active and healthy. This is a completely new product with the best price and high quality!',
    image: logo1,
  },
  {
    id: 2,
    type: 'premium',
    desc: '“Premium” menu - we use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruits - a restaurant menu without going to a restaurant!',
    image: logo2,
  },
  {
    id: 3,
    type: 'lenten menu',
    desc: 'Our special “Lenten menu” is a careful selection of ingredients: a complete absence of animal products. Complete harmony with yourself and nature in every element! Everything will be Om!',
    image: logo3,
  },
  {
    id: 4,
    type: 'balanced',
    desc: 'The “Balanced” menu means that your diet complies with all scientific recommendations. We carefully calculate your need for used food and create the best dishes for you.',
    image: logo4,
  },
];

const Menu = () => {
  return (
    <Wrapper>
      <div className='menu'>
        <h2 className='title'>Our menu for the day</h2>

        <div className='menu__field'>
          <div className='container'>
            <div className='menu__item'>
              <img src='img/tabs/vegy.jpg' alt='vegy' />
              <h3 className='menu__item-subtitle'>Menu "Fitness"</h3>
              <div className='menu__item-descr'>
                The "Fitness" menu is a new approach to cooking: more fresh
                vegetables and fruits. A product for active and healthy people.
                This is a completely new product with the best price and high
                quality!
              </div>
              <div className='menu__item-divider'></div>
              <div className='menu__item-price'>
                <div className='menu__item-cost'>Price:</div>
                <div className='menu__item-total'>
                  <span>15</span> $/day
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Menu;

const Wrapper = styled.section`
  .menu {
    padding: 40px 0 50px 0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .title {
      text-align: center;
    }
    &__field {
      margin-top: 50px;
      padding: 50px 0;
      width: 100%;
      background: rgba(249, 254, 126, 0.25);
    }
    &__item {
      width: 320px;
      min-height: 450px;
      background: #ffffff;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
      font-size: 16px;
      font-weight: 300;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      &-subtitle {
        font-weight: bold;
        font-size: 18px;
        padding: 0 20px;
        margin-top: 20px;
      }
      &-descr {
        margin-top: 20px;
        padding: 0 20px;
      }
      &-divider {
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.25);
        margin-top: 40px;
      }
      &-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        span {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
`;
