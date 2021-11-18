import logo from './logo.svg';
import './App.css';
import Form_data from './Component/Form/Form_data';

function App() {
  return (
    <div className="App">
      <Form_data/>
    </div>
  );
}

export default App;
import Sidebar from './Components/Sidebar';
import Navbar  from './Components/Navbar';
import Prev from './Components/Prev';
import Form from './Components/Form';
import Topheader from './Components/TopHeader';
import Modal from './Components/Modal';
import './Components/Style.css';
import { LinkData } from './Components/LinkData';

function App() {
  return (
   <>
      <Sidebar />
      <Topheader />
      <LinkData />
      <Navbar />
      <Prev />
      <Form />
      <Modal />
   </>
  );
}

export default App;
