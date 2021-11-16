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