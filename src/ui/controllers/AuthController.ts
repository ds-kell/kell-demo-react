import LoginUseCase from '../../useCases/auth/LoginUseCase';
import { AuthResponse } from '../../domain/repositories/AuthRepository';

class AuthController {
    private loginUseCase: LoginUseCase;

    constructor(loginUseCase: LoginUseCase) {
        this.loginUseCase = loginUseCase;
    }

    async login(username: string, password: string): Promise<AuthResponse> {
        const authResponse = await this.loginUseCase.execute(username, password);
        return authResponse;
    }
}

export default AuthController;
