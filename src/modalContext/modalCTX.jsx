import { createContext, useContext, useState } from 'react';

export const ModalCtx = createContext();

const ModalContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <ModalCtx.Provider value={{ showModal, onShowModal, onCloseModal }}>
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalContext;

export const useModalContext = () => {
  const modalCTX = useContext(ModalCtx);
  return modalCTX;
};
