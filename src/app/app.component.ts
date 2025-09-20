import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInfoComponent } from './child/user-info/user-info.component';
import { UserListComponent } from './parent/user-list/user-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfoComponent ,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
