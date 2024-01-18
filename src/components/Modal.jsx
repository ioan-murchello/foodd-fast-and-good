
import styled from 'styled-components';
import { useModalContext } from '../modalContext/modalCTX';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { setCursorPosition } from '../helpers/cursorPosition';

const Modal = () => {
  const { onCloseModal } = useModalContext();
  const [data, setData] = useState({name:'', phone: ''})

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onCloseModal();
    toast.success('Thank You! We will contact you soon.')
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

  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Wrapper className='modal' onClick={onCloseModal}>
      <div className='modal__dialog' onClick={handleContentClick}>
        <div className='modal__content'>
          <form onSubmit={onHandleSubmit}>
            <div className='modal__close' onClick={onCloseModal}>
              &times;
            </div>
            <div className='modal__title'>
              We will contact you as quickly as possible!
            </div>
            <input
              required
              placeholder='Your name'
              name='name'
              type='text'
              className='modal__input' 
              value={data.name}
              onChange={onHandleChange}
            />
            <input
              required
              placeholder='+49 (___) __-___'
              name='phone'
              type='phone'
              className='modal__input'
              value={data.phone} 
              onChange={onHandleChange}
            />
            <button type='submit' className='btn btn_dark btn_min'>
              Call me back
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Modal;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  &.show {
    display: block;
  }

  .modal__dialog {
    max-width: 500px;
    width: 100%;
    margin: 40px auto;
  }

  .modal__content {
    position: relative;
    width: 100%;
    padding: 40px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    max-height: 80vh;
    overflow-y: auto;
  }

  .modal__close {
    position: absolute;
    top: 8px;
    right: 14px;
    font-size: 30px;
    color: #000;
    opacity: 0.5;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .modal__title {
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  .modal__input {
    display: block;
    margin: 20px auto;
    width: 280px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 18px; 
    padding: 0 20px;
    outline: none;
    @media (max-width: 600px) {
      max-width: 80%;
    }
  }

  .btn {
    display: block;
    width: 280px;
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 10px;
    @media (max-width: 600px) {
      max-width: 80%;
    }
    &:hover {
      cursor: pointer;
      background-color: #ededed;
    }
  }
`;
