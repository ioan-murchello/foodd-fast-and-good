import styled from 'styled-components'; 
import { useState } from 'react';
import { cards } from '../data';
 
const Prewiev = () => {

  const [indexx, setIndexx] = useState(1)
  const [tab, setTab] = useState(cards[indexx - 1]);
  const onActive = id => {
    setIndexx(id)
    const el = cards.find((el) => el.id === id);
    setTab(el)
  }
  
  return (
    <Wrapper>
      <div className='preview'>
        <div className='container'>
          <div className='tabcontainer'>
            <div className={`tabcontent`}>
              <img
                key={tab.id}
                className={`${indexx === tab.id ? 'show fade' : 'hide'}`}
                src={tab.image}
                alt='vegy'
              />

              <div className='tabcontent__descr'>{tab.desc}</div>
            </div>

            <div className='tabheader'>
              <h3>Choose your eating style</h3>
              <div className='tabheader__items'>
                {cards.map((tab) => {
                  return (
                    <div
                      key={tab.id}
                      className={`tabheader__item ${
                        indexx === tab.id ? 'tabheader__item_active' : ''
                      }`}
                      onClick={() => onActive(tab.id)}
                    >
                      {tab.type}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='preview__life'>Live full life!</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Prewiev;

const Wrapper = styled.section`
  .preview {
    padding: 60px 0 100px 0;
    position: relative;
    
    @media (max-width: 600px){
      padding: 30px 0 30px 0;
    }
  }

  .preview__life {
    font-weight: bold;
    font-size: 20px;
    margin-left: 35px;
    margin-top: 35px;
  }

  .bgc_blue {
    position: absolute;
    right: 0;
    top: -155px;
    width: 50vw;
    height: 900px;
    background: rgba(146, 242, 255, 0.15);
    z-index: -1;
  }

  .tabcontainer {
    display: grid;
    grid-template-columns: 3fr 1fr;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 992px) {
    .tabcontainer {
      grid-template-columns: 2fr 1fr;
      min-height: 350px;
    }
  }
  @media (max-width: 600px) {
    .tabcontainer {
      grid-template-columns: 1fr;
      box-shadow: none;
    }
  }

  .tabcontent {
    position: relative;
  }

  .tabcontent img {
    /* transition: all 0.3s ease-in-out; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  @media (max-width: 600px) {
    .tabcontent img {
      height: auto;
      object-fit: cover;
    }
  }

  .tabcontent__descr {
    position: absolute;
    top: 300px;
    right: -177px;
    width: 500px;
    background: rgba(251, 254, 93, 0.937);
    padding: 50px;
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    color: rgb(0, 0, 0);
  }

  @media (max-width: 992px) {
    .tabcontent__descr {
      font-size: px;
      padding: 40px;
      line-height: 30px;
    }
  }
  @media (max-width: 600px) {
    .tabcontent__descr {
      position: relative;
      top: 0;
      left: 0;
      padding: 15px;
      font-size: 16px;
      width: inherit;
      line-height: 26px;
    }
  }

  .tabheader {
    width: 280px;
    padding: 35px 30px;
    background-color: #fff;
  }

  @media (max-width: 992px) {
    .tabheader {
      width: auto;
    }
  }

  .tabheader h3 {
    font-weight: bold;
    font-size: 16px;
  }
  .tabheader__items {
    margin: 20px 0 0 0;
  }
  .tabheader__item {
    padding: 6px;
    border-radius: 6px;
    color: #868686;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
  }
  .tabheader__item:hover {
    cursor: pointer; 
    font-size: 19px;
  }
  .tabheader__item_active {
    color: #000000; 
    font-size: 19px;
    font-weight: 600;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @keyframes fade {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;


