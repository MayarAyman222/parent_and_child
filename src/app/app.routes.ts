import { Routes } from '@angular/router';
import { UserInfoComponent } from './child/user-info/user-info.component';
import { UserListComponent } from './parent/user-list/user-list.component';
export const routes: Routes = [
   { path: ""  ,   component:UserInfoComponent},
   {path: "" , component:UserListComponent}
];
