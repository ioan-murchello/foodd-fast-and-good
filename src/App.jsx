
import { useModalContext } from './modalContext/modalCTX.jsx';
import './App.css';
import Header from './components/Header';
import Prewiev from './components/Prewiev';
import Timer from './components/Timer';
import Modal from './components/Modal';
import Offer from './components/Offer.jsx';
import Calculating from './components/Calculating.jsx';
import Menu from './components/Menu.jsx';



function App() {
   const {showModal} = useModalContext()
  return (
    <>
      <Header />
      <Timer/>
      <Prewiev />
      <Offer/>
      <Calculating/>
      <Menu/>
      {showModal && <Modal/>}
      {/* <h2>{timer}</h2> */}
    </>
  );
}

export default App;
