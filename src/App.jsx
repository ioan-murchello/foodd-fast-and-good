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

function App() {
  const { showModal } = useModalContext();
  return (
    <>
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
