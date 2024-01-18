import styled from 'styled-components';
import Button from './Button';
import food from '../assets/icons/Group 5.svg'

const Header = () => {
  
  return (
    <Wrapper className='header'>
      <div className='header__wrapper container'>
        <div className='header__left-block'>
          <div className='header__logo'>
            <img src={food} alt="Food logo" style={{width:'150px',height: '100px'}}/>
          </div>
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
    grid-template-columns: 1fr 1fr;
    padding: 20px 15px;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    .header__wrapper { 
      row-gap: 20px;
    }
  }
  .header__left-block {
    display: grid;
    grid-template-columns: 1fr;
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
  

  .header__logo {
    display: block;
    font-family: 'Rubik Doodle Shadow';
    place-items: start;
    line-height: 17px;
    font-size: 26px;
    color: #000;
    text-shadow: 1px 0px 5px #7fff10;
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
