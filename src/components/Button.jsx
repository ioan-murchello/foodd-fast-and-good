import styled from "styled-components"
import { useModalContext } from "../modalContext/modalCTX";

const Button = ({title, firstC, secondC}) => {
  const {onShowModal} = useModalContext()
  return (
    <Btn style={{backgroundColor: firstC, color: secondC}} onClick={onShowModal}>{title}</Btn>
  )
}
export default Button

const Btn = styled.button`
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
`;