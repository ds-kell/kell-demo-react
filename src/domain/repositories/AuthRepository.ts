interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    type: string;
    username: string;
    authorities: string[];
}

interface AuthRepository {
    login(username: string, password: string): Promise<AuthResponse>;
}

export type { AuthResponse };
export default AuthRepository;
