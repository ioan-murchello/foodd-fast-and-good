import styled from 'styled-components';
import Button from './Button';
import logo from '../assets/icons/logo.svg';

const Header = () => {
  
  return (
    <Wrapper className='header'>
      <div className='header__wrapper container'>
        <div className='header__left-block'>
          <div className='header__logo'>
            <img src={logo} alt='Logotype' />
          </div>
          <nav className='header__links'>
            <a href='#' className='header__link'>
              Delivery
            </a>
            <a href='#' className='header__link'>
              
            </a>
          </nav>
        </div>
        <div className='header__right-block'>
          <Button classNamebtn btn_white title='Contact us' /> 
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.header`
  background-color: lightblue;

  .header__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr; 
    padding: 20px 15px;
    margin: 0 auto;  
  }

  @media (max-width: 400px) {
    .header__wrapper {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }
  .header__left-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    max-width: 550px;
  }

  @media (max-width: 992px) {
    .header__left-block {
      grid-template-columns: 1fr;
    }
  }
  .header__right-block {
    display: grid;
    place-items: end;
    align-items: center;
  }
  @media (max-width: 400px) {
    .header__right-block {
      place-items: start;
    }
  }

  .header__logo {
    place-items: start;
    max-width: 170px;
  }

  .header__logo img {
    width: 100%;
  }

  .header__links {
    display: flex;
    align-items: center;
  }
  @media (max-width: 992px) {
    .header__links {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .header__link {
    position: relative;
    margin-right: 45px;
    font-weight: bold;
    font-size: 18px;
    color: $dark;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 110%;
      left: -5%;
      bottom: -1px;
      z-index: -1;
      height: 8px;
      background: $primary;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
