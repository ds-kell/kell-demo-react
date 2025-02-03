import { UserProfile } from '../types/AuthContextType';

interface UserRepository {
    getUser(): Promise<UserProfile>;
}
export default UserRepository;