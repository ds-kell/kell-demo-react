import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

import { AuthContextType, UserProfile, AuthResponse } from "../domain/types/AuthContextType";
import GetUserUseCase from "../useCases/GetUserUseCase";
import LoginUseCase from "../useCases/auth/LoginUseCase";
import LogOutUseCase from "../useCases/auth/LogOutUseCase";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
    loginUseCase: LoginUseCase;
    logoutUseCase: LogOutUseCase;
    getUserUseCase: GetUserUseCase;
  }
  
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children, loginUseCase, logoutUseCase, getUserUseCase }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [username, setUserName] = useState<string | null>(null);
    const isAuthenticated = !!cookies.accessToken;
    const accessToken = Cookies.get('accessToken');
  debugger
    useEffect(() => {
      if (isAuthenticated) {
        const fetchUser = async () => {
          try {
            const userProfile = await getUserUseCase.execute();
            setUser(userProfile);
          } catch (error) {
            console.error("Failed to fetch user profile:", error);
            removeCookie('accessToken');
            setUser(null);
          }
        };
  
        fetchUser();
      }
    }, [isAuthenticated]);
  
    const login = async (username: string, password: string): Promise<AuthResponse> => {
      try {
        const authResponse = await loginUseCase.execute(username, password);
        setUserName(authResponse.username);
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
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext)!;