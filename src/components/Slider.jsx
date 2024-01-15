import { useState } from 'react';
import styled from 'styled-components';
import { PiArrowSquareLeftFill } from 'react-icons/pi';
import { PiArrowSquareRightFill } from 'react-icons/pi';
import { listOfSLides } from '../data';
 
const Slider = () => {
  const [slides, setSlides] = useState(listOfSLides);
  const [offset, setOffset] = useState(0);

  const prevSlide = () => {
    setOffset((prevOffset) => {
      let newOffset = prevOffset - 1;
      if (newOffset < 0) {
        newOffset = (slides.length - 1) * 1
        return newOffset
      }
      return newOffset;
    });
  };

  const nextSlide = () => {
    setOffset((prevOffset) => {
      let newOffset = prevOffset + 1;
       if (newOffset > (slides.length - 1) * 1) {
        newOffset = 0
         return newOffset;
       }
      
      return newOffset;
    });
  };
  
  return (
    <Wrapper>
      <div className='offer__slider'>
        <div className='offer__slider-counter'>
          <div className='offer__slider-prev' onClick={prevSlide}>
            <PiArrowSquareLeftFill className='arrows'/>
          </div>
          <span id='current'>{offset + 1}</span>/<span id='total'>{slides.length}</span>
          <div className='offer__slider-next' onClick={nextSlide}>
            <PiArrowSquareRightFill className='arrows'/>
          </div>
        </div>
        <div className='offer__slider-wrapper'>
          <div className='slide'>
            <div
              className='all__slides'
              style={{
                transform: `translateX(-${offset * 100}%)`,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              {slides.map((sld) => {
                return (
                  <div
                    key={sld.id}
                    style={{ minWidth: '100%', maxWidth: '100%' }}
                    className='offer__slide'
                  >
                    <img src={sld.image} alt={sld.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Slider;

const Wrapper = styled.div`
  .offer__slider {
    width: 650px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 992px){
      width: 468px;
      height: 280px;
    }
    @media (max-width: 768px){
      width: 380px;
      height: 260px;
    }
    @media (max-width: 600px){
      width: 100%;
      height: 240px;
    }

    &-counter {
      display: flex;
      width: 180px;
      align-items: center;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.5);
    }

    &-wrapper {
      position: relative;
      width: 100%;
      height: 100%; 
      margin-top: 15px;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

      /* @media (max-width: 992px){
        width: 550px;
        height: 300px;

      } */
    }

    &-prev {
      margin-right: 10px;
      cursor: pointer;
    }

    &-next {
      margin-left: 10px;
      cursor: pointer;
    }

    #current {
      font-size: 48px;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);

      @media (max-width: 600px){
        font-size: 30px;
      }
    }
  }

  .offer__slide {
    max-width: 650px;
    min-width: 650px; 

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .slide {
    width: 100%;
    height: 100%; 
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
  .all__slides {
    display: flex;
    height: 100%;
  }
  .arrows{
    width: 30px;
    height: 30px;
  }
  .arrows:hover{
    transform: scale(1.07);
    transition: all 0.3s;
  }
`;
