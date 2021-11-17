import react from 'react';
//import './App.css';
import TopHeader from './Components/TopHeader';
import Form from './Components/Form';
import { LinkData } from './Components/LinkData';
import Navbar from './Components/Navbar';
import Prev from './Components/Prev';
import Sidebar from './Components/Sidebar';
import SidebarData from './Components/SidebarData';
import { Button } from './Components/Button';
import './Components/Style.css'


function App() {
  return (
    <>
    <Sidebar />
    <TopHeader />
    <LinkData />
    <Navbar />
    <Prev />
    <Form />
    <Button /> 
   
    </>
  );
}

export default App;
