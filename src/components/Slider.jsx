import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PiArrowSquareLeftFill } from 'react-icons/pi';
import { PiArrowSquareRightFill } from 'react-icons/pi';
import { listOfSLides } from '../data';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const [slides, setSlides] = useState(listOfSLides); 
  const [swiperIndex, setSwiperIndex] = useState(0); 
  const [swiperRealIndex, setSwiperRealIndex] = useState(0); 

  const prevSlide = () => {
    setSwiperIndex((prevOffset) => {
      if (prevOffset > 0) {
        return prevOffset - 1;
      }

      return prevOffset;
    });
  };

  const nextSlide = () => {
    setSwiperIndex((prevOffset) => {
      if (prevOffset < slides.length - 1) {
        return prevOffset + 1;
      }
      return prevOffset;
    });
  };
 
  return (
    <Wrapper>
      <div className='offer__slider'>
        <div className='offer__slider-counter'>
          <div
            className='offer__slider-prev image-swiper-button-prev'
            onClick={prevSlide}
          >
            <PiArrowSquareLeftFill className='arrows' />
          </div>
          <span id='current'>{swiperRealIndex + 1}</span>/
          <span id='total'>{slides.length}</span>
          <div
            className='offer__slider-next image-swiper-button-next'
            onClick={nextSlide}
          >
            <PiArrowSquareRightFill className='arrows' />
          </div>
        </div>
        <div className='offer__slider-wrapper'>
          <Swiper
            modules={[Navigation, Pagination]}
            className='swiper'
            effect='fade'
            spaceBetween={10}
            slidesPerView={1}
            initialSlide={swiperIndex}
            navigation={{
              nextEl: '.image-swiper-button-next',
              prevEl: '.image-swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            onActiveIndexChange={(index) => { 
              setSwiperIndex(index.activeIndex);
            }}
            onSlideChange={(indx) => setSwiperRealIndex(indx.realIndex)}
          >
            <div className='swpiper-wrapper'>
              {slides.map((sld) => (
                <SwiperSlide key={sld.id} className='offer__slide'>
                  <img src={sld.image} alt={sld.name} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
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

    &:hover{
      cursor: pointer;
    }

    @media (max-width: 992px) {
      width: 468px;
      height: 280px;
    }
    @media (max-width: 768px) {
      width: 310px;
      height: 460px;
    }
    @media (max-width: 600px) {
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
      margin-top: 15px;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
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

      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
  }

  .offer__slide {
    max-width: 650px;

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
  .arrows {
    width: 30px;
    height: 30px;
  }
  .arrows:hover {
    transform: scale(1.07);
    transition: all 0.3s;
  }
  .swiper {
    overflow: hidden;
  }
  .swiper-wrapper {
    display: flex;
  }
  .swiper-slide {
    height: auto;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin: 0 0 20px 0;
  }

  .swiper-pagination-bullet {
    width: 40px;
    height: 10px;
    background-color: #fff;
    opacity: 0.7;
    margin: 0 5px;
    border-radius: 4px;

    @media (max-width: 992px) {
      width: 20px;
    }
  }

  .swiper-pagination-bullet-active {
    /* Your styling for the active pagination bullet */
    background-color: #fff426; /* Customize the active bullet color */
    opacity: 1; /* Customize the active bullet opacity */
  }
`;
