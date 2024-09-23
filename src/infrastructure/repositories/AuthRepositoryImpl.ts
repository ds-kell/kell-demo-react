import AuthApi from '../api/AuthApi';
import AuthRepository from '../../domain/repositories/AuthRepository';
import { AuthResponse } from '../../domain/repositories/AuthRepository';

class AuthRepositoryImpl implements AuthRepository {
    async login(username: string, password: string): Promise<AuthResponse> {
        const response = await AuthApi.login({ username, password });

        if ('statusCode' in response && response.statusCode === 201) {
            return {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
                type: response.data.type,
                username: response.data.username,
                authorities: response.data.authorities,
            };
        } else {
            throw new Error('Failed to login');
        }
    }
}

export default AuthRepositoryImpl;
