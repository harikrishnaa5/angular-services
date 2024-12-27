import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { LoggerService } from './logger.service';

@Injectable() // used to inject a dependency in service class
export class UserService {
    constructor(private loggerService: LoggerService) {

    }
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
    this.loggerService.LogMessage(name, status)
  }
}
