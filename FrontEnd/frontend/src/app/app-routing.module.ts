import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-user', pathMatch: 'full'},
  { path: 'create-user', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
