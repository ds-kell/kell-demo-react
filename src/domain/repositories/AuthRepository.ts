import { AuthResponse } from '../types/AuthContextType';

interface AuthRepository {
    login(username: string, password: string): Promise<AuthResponse>;
}
export default AuthRepository;

