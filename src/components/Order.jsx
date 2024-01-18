import styled from 'styled-components';
import svg from '../assets/icons/right.svg';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setCursorPosition } from '../helpers/cursorPosition';
 
const Order = () => {
  const [data, setData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({name: '', phone: ''})
    toast.success('Thank You! We will contact you soon.');
  };

  const onHandleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setData((prev) => {
      if (name === 'phone') {
        let matrix = '+49 (___) __-___',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = value.replace(/\D/g, '');

        if (def.length >= val.length) {
          val = def;
        }

        let formattedPhoneNumber = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ''
            : a;
        });

        return { ...prev, [name]: formattedPhoneNumber };
      } else {
        return { ...prev, [name]: value };
      }
    });

    if (e.type === 'blur') {
      if (value.length === 2) {
        value = '';
        setData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setCursorPosition(value.length, e.target);
    }
  };

  return (
    <Wrapper>
      <div className='order'>
        <div className='container'>
          <div className='title'>Book your trial day right now!</div>
          <form onSubmit={handleSubmit} className='order__form'>
            <input
              required
              placeholder='Your name'
              name='name'
              type='text'
              className='order__input'
              value={data.name}
              onChange={onHandleChange}
            />
            <input
              required
              name='phone'
              placeholder='+49 (___) __-___'
              type='tel'
              className='order__input'
              onChange={onHandleChange}
              value={data.phone}
            />
            <img src={svg} alt='right' />
            <button className='btn btn_dark btn_min'>Call me back</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Order;

const Wrapper = styled.section`
  .order {
    padding-bottom: 80px;
    .title {
      text-align: center;
      font-size: 30px;
      font-weight: 600;

      @media (max-width: 992px) {
        font-size: 20px;
      }
    }
    &__form {
      margin-top: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 50px;

      @media (max-width: 992px) {
        column-gap: 20px;
        flex-direction: column;
        row-gap: 20px;
      }
      img {
        transform: scale(1.5);
        display: block;
        @media (max-width: 992px) {
          transform: rotateZ(90deg);
          margin: 10px 0;
        }
      }
    }
    &__input {
      height: 50px;
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      border: none;
      font-size: 18px; 
      padding: 0 20px;
      outline: none;

      @media (max-width: 992px) {
        width: 80%;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
  .btn {
    font-family: 'Nunito';
    font-weight: 600;
    padding: 15px 25px;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #fff;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s all;
    outline: none;
    border-radius: 6px;
    &:hover {
      transform: scale(0.98);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.455);
    }

    @media (max-width: 992px) {
      padding: 12px 20px;
    }

    @media (max-width: 600px) {
      padding: 10px 15px;
    }
  }
`;
