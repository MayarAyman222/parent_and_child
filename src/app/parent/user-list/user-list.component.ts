import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../../child/user-info/user-info.component';
interface User{
   id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-user-list',
  imports:[CommonModule , FormsModule , UserInfoComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  nextId: number = 1;

  newUser = {
    name: '',
    email: ''
  };

  addUser() {
    if (this.newUser.name.trim() && this.newUser.email.trim()) {
      this.users.push({
        id: this.nextId++,
        name: this.newUser.name,
        email: this.newUser.email
      });
      // clear form
      this.newUser = { name: '', email: '' };
    }
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
