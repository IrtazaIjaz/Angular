import { Component } from '@angular/core';
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users;
  err1=true;

  constructor(private userService: UserService) {
     this.users = userService.getUsers();
  }
}
