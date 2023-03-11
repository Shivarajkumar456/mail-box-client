import { Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import ComposeMail from './Components/ComposeMail/ComposeMail';
import MailPage from './Components/Mail/MailPage';
import InboxEmail from './Components/ComposeMail/Inbox';
import SentEmail from './Components/ComposeMail/Sent';
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
        <Route path='/inbox' element={<InboxEmail/>} />
        <Route path='/inbox/:id' element={<MailPage />} />
        <Route path='/sent' element={<SentEmail/>}/>
        <Route path='/sent/:id' element={<MailPage/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
