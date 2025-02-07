import RefreshTokenRepository from '../../domain/repositories/RefreshTokenRepository';
import { AuthResponse } from '../../domain/types/AuthContextType';

class RefreshTokenUseCase {
    constructor(private refreshTokenRepository: RefreshTokenRepository) {}
    async execute(): Promise<AuthResponse> {
        return await this.refreshTokenRepository.refresh();
    }
}

export default RefreshTokenUseCase;
