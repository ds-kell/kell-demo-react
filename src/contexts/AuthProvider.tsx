import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

import { AuthContextType, UserProfile, AuthResponse } from "../domain/types/AuthContextType";
import GetUserUseCase from "../useCases/GetUserUseCase";
import LoginUseCase from "../useCases/auth/LoginUseCase";
import LogOutUseCase from "../useCases/auth/LogOutUseCase";
import RefreshTokenUseCase from "../useCases/auth/RefreshTokenUseCase";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
    loginUseCase: LoginUseCase;
    logoutUseCase: LogOutUseCase;
    getUserUseCase: GetUserUseCase;
    refreshTokenUseCase: RefreshTokenUseCase;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, loginUseCase, logoutUseCase, getUserUseCase, refreshTokenUseCase }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [username, setUserName] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
      const checkAuth = async () => {
          try {
              const userProfile = await refreshTokenUseCase.execute();
              setUser(userProfile);
              setIsAuthenticated(true);
          } catch (error) {
              console.error("Failed to fetch user profile:", error);
              setIsAuthenticated(false);
              setUser(null);
          } finally {
              setIsLoading(false);
          }
      };

      checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<AuthResponse> => {
      try {
          const authResponse = await loginUseCase.execute(username, password);
          setUserName(authResponse.username);
          setIsAuthenticated(true);
          return authResponse;
      } catch (error) {
          console.error("Login failed:", error);
          throw error;
      }
  };

  const logout = () => {
      try {
          // logoutUseCase.execute();
          removeCookie('accessToken');
          setUser(null);
          setIsAuthenticated(false);
      } catch (error) {
          console.error("Logout failed:", error);
      }
  };

  return (
      <AuthContext.Provider value={{ isAuthenticated, username, login, logout, isLoading }}>
          {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
