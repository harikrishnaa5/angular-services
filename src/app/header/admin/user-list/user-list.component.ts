import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers:[UserService]     no need for this. here this will override the instance from the admin component.
})
export class UserListComponent {
  constructor(private userService: UserService) {}
  userList = this.userService.GetAllUsers();
}
