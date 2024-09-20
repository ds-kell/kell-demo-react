import { UserRepository } from '../../domain/repositories/UserRepository';

export class GetUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number) {
    return this.userRepository.getUserById(id);
  }
}
