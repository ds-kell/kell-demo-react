import RefreshTokenRepository from '../../domain/repositories/RefreshTokenRepository';
import { AuthResponse } from '../../domain/types/AuthContextType';
import RefreshAPI from '../api/RefreshAPI';


class RefreshTokenRepositoryImpl implements RefreshTokenRepository {
    async  refresh(): Promise<AuthResponse> {
        const response = await RefreshAPI.refresh();
        // 'status' in response && (response.status == 'CREATED' || response.status == 'OK')
        if (false) {
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