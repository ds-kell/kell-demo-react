import { useState } from 'react';
import AuthRepositoryImpl from '../../infrastructure/repositories/AuthRepositoryImpl';
import LoginUseCase from '../../useCases/auth/LoginUseCase';
import AuthController from '../controllers/AuthController';

interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    type: string;
    username: string;
    authorities: string[];
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<AuthResponse | null>(null);

    const authRepository = new AuthRepositoryImpl();
    const loginUseCase = new LoginUseCase(authRepository);
    const authController = new AuthController(loginUseCase);

    const login = async (username: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const userData = await authController.login(username, password);
            localStorage.setItem('accessToken', userData.accessToken);
            localStorage.setItem('refreshToken', userData.refreshToken);
            setUserData(userData);
            return userData;
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error, userData };
};

export default useLogin;
