import { Component, Inject } from '@angular/core';
import { USER_SERVICE } from 'src/app/app.module';
import { UserService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers:[UserService]     no need for this. here this will override the instance from the admin component.
})
export class UserListComponent {
  constructor(@Inject (USER_SERVICE) private userService: UserService) {}
  userList = this.userService.GetAllUsers();
}
