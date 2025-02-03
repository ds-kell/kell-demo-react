import GetUserApi from '../api/GetUserApi';
import UserRepository from '../../domain/repositories/UserRepository';
import { UserProfile } from '../../domain/types/AuthContextType';

class UserRepositoryImpl implements UserRepository {
    async getUser(): Promise<UserProfile> {
        const response = await GetUserApi.getUser();
        if ('statusCode' in response && (response.statusCode == 'CREATED' || response.statusCode == 'OK')) {
            return {
                accessToken: response.accessToken,
                refreshToken: response.refreshToken,
                type: response.type,
                username: response.username,
                authorities: response.authorities,
            };
        } else {
            throw new Error('Failed to login');
        }
    }
}

export default UserRepositoryImpl;
