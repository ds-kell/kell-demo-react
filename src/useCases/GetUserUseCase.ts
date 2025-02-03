import UserRepository from '../domain/repositories/UserRepository';
import { UserProfile } from '../domain/types/AuthContextType';

class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<UserProfile> {
        try {
            const userProfile = await this.userRepository.getUser();
            if (!userProfile) {
                throw new Error('User profile not found');
            }
            return userProfile;
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw new Error('Failed to fetch user profile');
        }
    }
}

export default GetUserUseCase;