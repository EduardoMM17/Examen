import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from 'src/app/create-user/create-user.component';
import { CreateOrderComponent } from 'src/app/create-order/create-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-user', pathMatch: 'full'},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'create-order', component: CreateOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
