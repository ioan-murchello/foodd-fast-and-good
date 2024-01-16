import { useModalContext } from './modalContext/modalCTX.jsx';
import './App.css';
import {
  Header,
  Prewiev,
  Modal,
  Offer,
  Calculating,
  Menu,
  Order,
  Promotion,
  Footer,
} from './components/index';

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { showModal } = useModalContext();
  return (
    <>
    <ToastContainer/>
      <Header /> 
      <Prewiev />
      <Offer />
      <Calculating />
      <Menu />
      <Order />
      <Promotion />
      <Footer/>
      {showModal && <Modal />}
    </>
  );
}

export default App;
