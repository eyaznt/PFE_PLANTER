export class User {
  email: string;
  username: string;
  password: string;
  phone: number;
  
  constructor( email: string, username: string, password: string, phone: number) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.phone = phone;
  }
}
  