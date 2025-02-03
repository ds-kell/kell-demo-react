import { AuthResponse } from '../../domain/types/AuthContextType';
import { NavigateFunction } from 'react-router-dom';
import LoginUseCase from '../../useCases/auth/LoginUseCase';

class AuthController {
    private loginUseCase: LoginUseCase;
    private navigate: NavigateFunction;

    constructor(loginUseCase: LoginUseCase, navigate: NavigateFunction) {
        this.loginUseCase = loginUseCase;
        this.navigate = navigate;
    }

    async login(username: string, password: string): Promise<AuthResponse> {
        const authResponse = await this.loginUseCase.execute(username, password);
        this.navigate('/home');
        return authResponse;
    }
}

export default AuthController;
