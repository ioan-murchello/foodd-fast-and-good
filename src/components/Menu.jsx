import styled from 'styled-components';
import { cards } from '../data';
 
const menuCard = cards.slice(0, -1)
 

const Menu = () => {
  return (
    <Wrapper>
      <div className='menu'>
        <h2 className='title'>Our menu for the day</h2>

        <div className='menu__field'>
          <div className='container'>
                {menuCard.map(card => {
                    return (
                      <div className='menu__item' key={card.id}>
                        <img src={card.image} alt={card.type} />
                        <h3 className='menu__item-subtitle'>Menu {card.type}</h3>
                        <div className='menu__item-descr'> 
                        {card.desc}
                        </div>
                        <div className='menu__item-divider'></div>
                        <div className='menu__item-price'>
                          <div className='menu__item-cost'>Price:</div>
                          <div className='menu__item-total'>
                            <span>15</span> $/day
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
