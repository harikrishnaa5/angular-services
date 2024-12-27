import { Component, Inject } from '@angular/core';
import { USER_SERVICE } from 'src/app/app.module';
import { UserService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers: [UserService]
})
export class AdminComponent {
  constructor(@Inject(USER_SERVICE) private userService: UserService) {}
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
  createUser() {
    this.userService.CreateUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
    console.log(this.userService.users);
  }
}
