import { UserRepository } from '../../../core/domain/repositories/UserRepository';
import { UserApi } from '../api/UserApi';
import { User } from '../../../core/domain/entities/User';

export class UserRepositoryImpl implements UserRepository {
  constructor(private userApi: UserApi) {}

  async getUserById(id: number): Promise<User> {
    return this.userApi.fetchUserById(id);
  }

  async createUser(user: User): Promise<void> {
    // Implementation to create a user
  }
}
