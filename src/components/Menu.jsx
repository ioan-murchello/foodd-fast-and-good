import styled from 'styled-components';
import { cards } from '../data'; 

const menuCard = cards.slice(0, -1);

const Menu = () => { 
  return (
    <Wrapper>
      <div className='menu'>
        <h2 className='title'>Our menu for the day</h2>

        <div className='menu__field'>
          <div className='container'>
            {menuCard.map((card) => {
              return (
                <div
                  className='menu__item'
                  key={card.id}  
                >
                  <img src={card.image} alt={card.type} />
                  <h3 className='menu__item-subtitle'>Menu {card.type}</h3>
                  <div className='menu__item-descr'>{card.desc}</div>
                  <div className='menu__item-divider'></div>
                  <div className='menu__item-price'>
                    <div className='menu__item-cost'>Price:</div>
                    <div className='menu__item-total'>
                      <span>{card.price.toFixed(2)}</span> $/day
                    </div>
                  </div>
                </div>
              );
            })}
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
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 320px));
      justify-content: center;
      column-gap: 45px;
      row-gap: 45px;
    }
    .title {
      text-align: center;
    }
    &__field {
      margin-top: 50px;
      padding: 50px 0;
      width: 100%;
      background: #feffaf;
    }
    &__item {
      perspective: 1000px;
      min-height: 450px;
      background: #ffffff;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
      font-size: 16px;
      font-weight: 300;
      transition: all 0.3s ease img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transform-origin: center;
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

        &:first-child {
          transform: rotateX(2deg) rotateY(2deg);
          transform-origin: center;
        }
        &:nth-child(2) {
          transform: rotateX(-2deg) rotateY(-2deg);
          transform-origin: center;
        }
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
