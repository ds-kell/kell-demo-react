import GetUserApi from '../api/GetUserApi';
import UserRepository from '../../domain/repositories/UserRepository';
import { UserProfile } from '../../domain/types/AuthContextType';

class UserRepositoryImpl implements UserRepository {
    async getUser(): Promise<UserProfile> {
        const response = await GetUserApi.getUser();
        //'status' in response && (response.status == 'CREATED' || response.status == 'OK')
        if (false) {
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
