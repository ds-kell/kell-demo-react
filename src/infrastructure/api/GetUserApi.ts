import { UserProfile } from "../../domain/types/AuthContextType";

class GetUserApi {
    private static BASE_URL = 'http://localhost:8088/api/private/user';

    static async getUser(): Promise<UserProfile> {
        const response = await fetch(`${this.BASE_URL}/profile`, {
            method: 'GET',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();
        if (!response.ok) {
            throw new Error(jsonResponse.message || 'Failed to fetch');
        }

        return jsonResponse as UserProfile;
    }
}

export default GetUserApi;
