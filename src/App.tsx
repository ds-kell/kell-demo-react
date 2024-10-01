import React from 'react';
import LoginForm from './ui/components/LoginForm';
import ChatComponent from './ui/components/ChatComponent';

// FunctionComponent
const App: React.FC = () => {
  return (
    <div>
      <h1>React</h1>
      <LoginForm />
      <ChatComponent />
    </div>
  );
}

export default App;
