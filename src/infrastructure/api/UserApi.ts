import axios from 'axios';
import { User } from '../../../core/domain/entities/User';

export class UserApi {
  async fetchUserById(id: number): Promise<User> {
    const response = await axios.get(`/api/users/${id}`);
    return new User(response.data.id, response.data.name, response.data.email);
  }
}
