import axios from 'axios';
import { IUser } from './types';

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
  private users: string;

  constructor() {
    this.users = '/api/crud';
  }

  public async getUsers(): Promise<IUser[]> {
    const users: IUser[] = await httpClient.get(this.users);

    return users;
  }

  public async getUser(id: string): Promise<IUser> {
    const user: IUser = await httpClient.get(this.users + '/' + id);

    return user;
  }

  public async addUser(user: IUser) {
    const response = await httpClient.post(this.users, user);

    return response;
  }

  public async deleteUser(id: string): Promise<IUser> {
    const userDeleted: IUser = await httpClient.delete(this.users + '/' + id);

    return userDeleted;
  }
}

export const API = new Api_instance();
