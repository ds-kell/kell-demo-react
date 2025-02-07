import { AuthResponse } from '../types/AuthContextType';

interface RefreshTokenRepository {
    refresh(): Promise<AuthResponse>;
}
export default RefreshTokenRepository;
