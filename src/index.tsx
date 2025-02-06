import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GetUserUseCase from "./useCases/GetUserUseCase";
import LoginUseCase from "./useCases/auth/LoginUseCase";
import LogOutUseCase from "./useCases/auth/LogOutUseCase";
import UserRepositoryImpl from "./infrastructure/repositories/UserRepositoryImpl";
import AuthRepositoryImpl from "./infrastructure/repositories/AuthRepositoryImpl";
import { AuthProvider } from "./contexts/AuthProvider";

const userRepository = new UserRepositoryImpl();
const authRepository = new AuthRepositoryImpl();

const getUserUseCase = new GetUserUseCase(userRepository);
const loginUseCase = new LoginUseCase(authRepository);
const logoutUseCase = new LogOutUseCase();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AuthProvider
        getUserUseCase={getUserUseCase}
        loginUseCase={loginUseCase}
        logoutUseCase={logoutUseCase}
      >
        <App />
      </AuthProvider>
    </React.StrictMode>
  );