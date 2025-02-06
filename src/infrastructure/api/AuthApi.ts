import { LoginRequest, LoginSuccessResponse, LoginErrorResponse } from "../../domain/types/AuthContextType";

type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

class AuthApi {
    private static BASE_URL = 'http://localhost:8088/api/public/auth';

    static async login(data: LoginRequest): Promise<LoginResponse> {
        const response = await fetch(`${this.BASE_URL}/login`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();
        if (!response.ok) {
            throw new Error(jsonResponse.message || 'Failed to login');
        }

        return jsonResponse as LoginSuccessResponse;
    }
}

export default AuthApi;
