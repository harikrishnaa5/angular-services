import { User } from '../Models/user';

export class UserService {
  users: User[] = [
    new User('Peter Parker', 'Male', 'Yearly', 'Active'),
    new User('Bruce Wayne', 'Male', 'Monthly', 'Inactive'),
    new User('Diana', 'Female', 'Quaterly', 'Active'),
  ];

  GetAllUsers() {
    return this.users;
  }
  CreateUser(name: string, gender: string, subType: string, status: string) {
    const newUser = new User(name, gender, subType, status);
    this.users.push(newUser);
  }
}
