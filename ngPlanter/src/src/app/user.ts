import { Plant } from './plant';

export class User {
  email: string;
  username: string;
  password: string;
  phone: number;
  plants: Plant[] = [];
  userId: string = '';
  role: string;

  constructor(email: string, username: string, password: string, phone: number) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.phone = phone;
    if (username.toLowerCase() === "admin") { // if this is the first user
      this.role = "ADMIN";
    } else {
      this.role = "USER";
    }
    }
}
