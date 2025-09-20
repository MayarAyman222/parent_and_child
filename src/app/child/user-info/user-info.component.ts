
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface User{
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-info',
  imports:[CommonModule , FormsModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user!: User;
   @Input() index!: number;   
  @Output() remove = new EventEmitter<number>();

  removeUser() {
    this.remove.emit(this.user.id);
  }
}
