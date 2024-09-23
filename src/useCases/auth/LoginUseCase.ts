import AuthRepository from '../../domain/repositories/AuthRepository';
import { AuthResponse } from '../../domain/repositories/AuthRepository';

class LoginUseCase {
    constructor(private authRepository: AuthRepository) {}

    async execute(username: string, password: string): Promise<AuthResponse> {
        if (!username || !password) {
            throw new Error('Username and password are required');
        }

        return await this.authRepository.login(username, password);
    }
}

export default LoginUseCase;
