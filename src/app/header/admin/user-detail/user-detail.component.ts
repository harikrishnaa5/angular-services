import { Component, Inject, OnInit } from '@angular/core';
import { USER_SERVICE } from 'src/app/app.module';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  selectedUser: User
  constructor(@Inject(USER_SERVICE) private userService: UserService) {}
ngOnInit() {
  this.userService.userDetails.subscribe((data: User) =>{
    this.selectedUser = data
    console.log(this.selectedUser)
  })
  
}

}
