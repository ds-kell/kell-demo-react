import RefreshTokenRepository from '../../domain/repositories/RefreshTokenRepository';
import { AuthResponse } from '../../domain/types/AuthContextType';
import RefreshAPI from '../api/RefreshAPI';


class RefreshTokenRepositoryImpl implements RefreshTokenRepository {
    async  refresh(): Promise<AuthResponse> {
        const response = await RefreshAPI.refresh();
        if ('statusCode' in response && (response.statusCode == 'CREATED' || response.statusCode == 'OK')) {
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

export default RefreshTokenRepositoryImpl;