import { Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import ComposeMail from './Components/ComposeMail/ComposeMail';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <Routes>
      <Route path="/" element={<SignUp />} exact/>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<SignUp />} />
        <Route path='/compose' element={<ComposeMail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
