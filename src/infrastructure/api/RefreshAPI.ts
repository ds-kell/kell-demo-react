import { LoginSuccessResponse, LoginErrorResponse } from "../../domain/types/AuthContextType";

type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

class RefreshAPI {
    private static BASE_URL = 'http://localhost:8088/api/public/auth';

    static async refresh(): Promise<LoginResponse> {
        const response = await fetch(`${this.BASE_URL}/refresh-token`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const jsonResponse = await response.json();
        if (!response.ok) {
            throw new Error(jsonResponse.message || 'Failed to login');
        }

        return jsonResponse as LoginSuccessResponse;
    }
}

export default RefreshAPI;
