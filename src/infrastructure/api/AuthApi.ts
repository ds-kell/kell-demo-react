interface LoginRequest {
    username: string;
    password: string;
}

interface LoginSuccessResponse {
    statusCode: number;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        type: string;
        username: string;
        authorities: string[];
    };
}

interface LoginErrorResponse {
    timestamp: number;
    status: number;
    error: string;
    message: string;
    path: string;
}

type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

class AuthApi {
    private static BASE_URL = 'http://localhost:8088/api/public/auth';

    static async login(data: LoginRequest): Promise<LoginResponse> {
        const response = await fetch(`${this.BASE_URL}/login`, {
            method: 'POST',
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
