import { Plant } from './plant';

export class User {
  email: string;
  username: string;
  password: string;
  phone: number;
  plants: Plant[] = [];
  userId: string = '';

  constructor(email: string, username: string, password: string, phone: number) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.phone = phone;
  }
}
