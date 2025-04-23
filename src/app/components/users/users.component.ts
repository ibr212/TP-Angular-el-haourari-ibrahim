import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {User} from './../../../../Models/User';
@Component({
  selector: 'app-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  currentUser : User = new User();
  id : number = 0;
  users : Array<User> = new Array<User>;


addUserAction(){
  if(this.currentUser){
    this.id += 1;
    this.currentUser.userId = "${this.id}"; 
  this.users.push(this.currentUser);
  this.currentUser = new User();
  console.log(this.currentUser.firstName);
  console.log(this.currentUser.lastName)
  }
}
deleteUserAction(){
  this.users.pop();
}

}
