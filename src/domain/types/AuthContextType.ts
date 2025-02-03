import { User } from '../entities/User'

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}
export type { AuthContextType };

 
interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    type: string;
    username: string;
    authorities: string[];
}
export type { AuthResponse };


interface LoginRequest {
    username: string;
    password: string;
}
export type { LoginRequest };


interface LoginSuccessResponse {
    statusCode: string;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        type: string;
        username: string;
        authorities: string[];
    };
}
export type { LoginSuccessResponse };


interface LoginErrorResponse {
    timestamp: number;
    status: number;
    error: string;
    message: string;
    path: string;
}
export type { LoginErrorResponse };


interface UserProfile {
    accessToken: string;
    refreshToken: string;
    type: string;
    username: string;
    authorities: string[];
}
export type { UserProfile };
