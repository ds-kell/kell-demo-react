import { LoginSuccessResponse, LoginErrorResponse, NoAuthentication } from "../../domain/types/AuthContextType";

type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

class RefreshAPI {
    static async refresh(): Promise<any> {
        try {
            const response = await fetch('http://localhost:8088/api/private/auth/refresh-token', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            if (!response.ok) {
                return jsonResponse as LoginErrorResponse;
            }
            return jsonResponse as LoginSuccessResponse;
        } catch (error) {
            const fallbackError: NoAuthentication = {
                path: "/api/private/auth/refresh-token",
                error: "Network Error",
                message: "Unable to reach the server",
                status: 500,
            };
            debugger
            return fallbackError;
        }
    }
}

export default RefreshAPI;
