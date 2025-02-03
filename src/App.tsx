import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './ui/components/LoginForm';
import Home from './ui/components/Home';
import Navbar from './ui/components/Navbar/Navbar';
// import ChatComponent from './ui/components/Chat// import ChatComponent from './ui/components/ChatComponent';Component';

// FunctionComponent
const App: React.FC = () => {
  return (
       <Router basename="/">
       <Navbar/>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
       </Router>
  );
}

export default App;