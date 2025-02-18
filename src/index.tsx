import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import GetUserUseCase from "./useCases/GetUserUseCase";
import LoginUseCase from "./useCases/auth/LoginUseCase";
import LogOutUseCase from "./useCases/auth/LogOutUseCase";
import RefreshTokenUseCase from "./useCases/auth/RefreshTokenUseCase";
import UserRepositoryImpl from "./infrastructure/repositories/UserRepositoryImpl";
import AuthRepositoryImpl from "./infrastructure/repositories/AuthRepositoryImpl";
import RefreshTokenRepositoryImpl from "./infrastructure/repositories/RefreshTokenRepositoryImpl";
import { AuthProvider } from "./contexts/AuthProvider";

const userRepository = new UserRepositoryImpl();
const authRepository = new AuthRepositoryImpl();
const refreshTokenRepository = new RefreshTokenRepositoryImpl();

const getUserUseCase = new GetUserUseCase(userRepository);
const loginUseCase = new LoginUseCase(authRepository);
const logoutUseCase = new LogOutUseCase();
const refreshTokenUseCase = new RefreshTokenUseCase(refreshTokenRepository);


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider
          getUserUseCase={getUserUseCase}
          loginUseCase={loginUseCase}
          logoutUseCase={logoutUseCase}
          refreshTokenUseCase={refreshTokenUseCase}
        >
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );