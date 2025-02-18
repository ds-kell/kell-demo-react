import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './ui/components/LoginForm';
import Home from './ui/components/Home';
import Navbar from './ui/components/Navbar/Navbar';
import { useAuth } from "./contexts/AuthProvider";

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LoginForm />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;